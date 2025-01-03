import { useState, useEffect } from 'react';
import { 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  doc,
  query,
  where,
  setDoc,
  updateDoc
} from 'firebase/firestore';
import { 
  createUserWithEmailAndPassword, 
  updateProfile,
  updatePassword,
  EmailAuthProvider,
  getAuth,
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signOut
} from 'firebase/auth';
import { auth, db } from '../../lib/firebase';
import { toast } from 'react-hot-toast';
import { Loader2, Search, UserPlus, MoreVertical, Ban, Key, Trash2, LogOut, Image } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NewUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  driveUrl: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  driveUrl?: string;
  isActive?: boolean;
  deactivationReason?: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [deactivationReason, setDeactivationReason] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [newUser, setNewUser] = useState<NewUser>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    driveUrl: ''
  });
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, 'users');
        const querySnapshot = await getDocs(usersRef);
        const usersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Erro ao carregar usuários');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (newUser.password !== newUser.confirmPassword) {
      toast.error('As senhas não coincidem');
      setLoading(false);
      return;
    }

    try {
      // Primeiro, verificar se o email já existe no Firebase Auth
      try {
        const methods = await fetchSignInMethodsForEmail(auth, newUser.email);
        if (methods.length > 0) {
          toast.error('Este email já está em uso');
          setLoading(false);
          return;
        }
      } catch (error) {
        console.error('Error checking email:', error);
      }

      // Create authentication user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      );

      // Update user profile with name
      await updateProfile(userCredential.user, {
        displayName: newUser.name
      });

      // Add user data to Firestore using UID as document ID
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        uid: userCredential.user.uid,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        driveUrl: newUser.driveUrl,
        createdAt: new Date(),
        isActive: true
      });

      toast.success('Usuário criado com sucesso!');
      setShowAddModal(false);
      setNewUser({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'user',
        driveUrl: ''
      });
      
      // Refresh users list
      const usersRef = collection(db, 'users');
      const snapshot = await getDocs(usersRef);
      const usersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setUsers(usersData);
    } catch (error: any) {
      console.error('Error creating user:', error);
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Este email já está em uso');
      } else {
        toast.error(error.message || 'Erro ao criar usuário');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Tem certeza que deseja excluir este usuário?')) return;

    try {
      await deleteDoc(doc(db, 'users', userId));
      toast.success('Usuário excluído com sucesso!');
      
      // Atualizar lista
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Erro ao excluir usuário');
    }
  };

  const handleDeactivateUser = async () => {
    if (!selectedUser || !deactivationReason.trim()) return;

    try {
      await updateDoc(doc(db, 'users', selectedUser.id), {
        isActive: false,
        deactivationReason: deactivationReason.trim()
      });

      setUsers(users.map(user => 
        user.id === selectedUser.id 
          ? { ...user, isActive: false, deactivationReason: deactivationReason.trim() }
          : user
      ));

      toast.success('Usuário desativado com sucesso');
      setShowDeactivateModal(false);
      setDeactivationReason('');
      setSelectedUser(null);
    } catch (error) {
      console.error('Error deactivating user:', error);
      toast.error('Erro ao desativar usuário');
    }
  };

  const handleActivateUser = async (user: User) => {
    try {
      await updateDoc(doc(db, 'users', user.id), {
        isActive: true,
        deactivationReason: null
      });

      setUsers(users.map(u => 
        u.id === user.id 
          ? { ...u, isActive: true, deactivationReason: undefined }
          : u
      ));

      toast.success('Usuário ativado com sucesso');
    } catch (error) {
      console.error('Error activating user:', error);
      toast.error('Erro ao ativar usuário');
    }
  };

  const handlePasswordChange = async () => {
    if (!selectedUser) return;
    if (newPassword !== confirmNewPassword) {
      toast.error('As senhas não coincidem');
      return;
    }
    if (newPassword.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    try {
      setLoading(true);
      
      // Criar uma instância temporária do auth
      const tempAuth = getAuth();
      
      // Fazer login temporário com o email do usuário
      const userCredential = await signInWithEmailAndPassword(tempAuth, selectedUser.email, newPassword);
      
      // Atualizar a senha
      if (userCredential.user) {
        await updatePassword(userCredential.user, newPassword);
      }

      toast.success('Senha alterada com sucesso');
      setShowPasswordModal(false);
      setNewPassword('');
      setConfirmNewPassword('');
      setSelectedUser(null);
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error('Erro ao alterar senha');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
      toast.success('Logout realizado com sucesso');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Erro ao fazer logout');
    }
  };

  const toggleDropdown = (userId: string) => {
    setActiveDropdown(activeDropdown === userId ? null : userId);
  };

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const filteredUsers = users.filter(user => 
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Usuários</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#2563eb] hover:bg-[#3b82f6] focus:outline-none transition-colors"
        >
          <UserPlus className="h-5 w-5 mr-2" />
          Novo Usuário
        </button>
      </div>

      {/* Filtros */}
      <div className="bg-[#16162a] p-4 rounded-lg shadow space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Buscar
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Nome ou email"
              className="w-full px-3 py-2 bg-[#1a1a2e] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb]"
            />
          </div>
        </div>
      </div>

      {/* Lista de Usuários */}
      <div className="bg-[#16162a] rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-[#1a1a2e]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Usuário
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-[#1a1a2e]">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-lg font-medium text-white">
                            {user.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-white">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-300">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.isActive === false
                          ? 'bg-red-100 text-red-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {user.isActive === false ? 'Inativo' : 'Ativo'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {user.role === 'admin' ? 'Admin' : 'Usuário'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      {user.isActive !== false ? (
                        <button
                          onClick={() => {
                            setSelectedUser(user);
                            setShowDeactivateModal(true);
                          }}
                          className="text-red-500 hover:text-red-700 bg-red-500/10 hover:bg-red-500/20 transition-colors rounded-lg p-2"
                          title="Desativar Usuário"
                        >
                          <Ban className="w-5 h-5" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleActivateUser(user)}
                          className="text-green-500 hover:text-green-700 bg-green-500/10 hover:bg-green-500/20 transition-colors rounded-lg p-2"
                          title="Ativar Usuário"
                        >
                          <Ban className="w-5 h-5" />
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setShowPasswordModal(true);
                        }}
                        className="text-blue-500 hover:text-blue-700 bg-blue-500/10 hover:bg-blue-500/20 transition-colors rounded-lg p-2"
                        title="Alterar Senha"
                      >
                        <Key className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => navigate(`/admin/user-arts/${user.id}`)}
                        className="text-purple-500 hover:text-purple-700 bg-purple-500/10 hover:bg-purple-500/20 transition-colors rounded-lg p-2"
                        title="Ver Artes do Usuário"
                      >
                        <Image className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="text-red-500 hover:text-red-700 bg-red-500/10 hover:bg-red-500/20 transition-colors rounded-lg p-2"
                        title="Excluir Usuário"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Adicionar Usuário */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-[#16162a] rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-white">Adicionar Usuário</h2>
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#1a1a2e] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full px-3 py-2 bg-[#1a1a2e] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  URL do Google Drive
                </label>
                <input
                  type="url"
                  value={newUser.driveUrl}
                  onChange={(e) => setNewUser({ ...newUser, driveUrl: e.target.value })}
                  className="w-full px-3 py-2 bg-[#1a1a2e] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb]"
                  placeholder="Cole aqui o link da pasta do Google Drive"
                />
                <p className="mt-1 text-sm text-gray-400">
                  Compartilhe uma pasta do Drive para armazenar os arquivos do usuário
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Senha
                </label>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="w-full px-3 py-2 bg-[#1a1a2e] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  value={newUser.confirmPassword}
                  onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
                  className="w-full px-3 py-2 bg-[#1a1a2e] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Função
                </label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full px-3 py-2 bg-[#1a1a2e] border border-gray-600 rounded-md text-white focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb]"
                >
                  <option value="user">Usuário</option>
                  <option value="admin">Administrador</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white focus:outline-none"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-[#2563eb] text-white text-sm font-medium rounded-md hover:bg-[#3b82f6] focus:outline-none transition-colors"
                >
                  {loading ? 'Criando...' : 'Criar Usuário'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Desativar Usuário */}
      {showDeactivateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#16162a] rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-white">Desativar Usuário</h2>
            <p className="text-gray-300 mb-4">
              Você está prestes a desativar o usuário {selectedUser?.name}. 
              Por favor, informe o motivo da desativação:
            </p>
            
            <textarea
              value={deactivationReason}
              onChange={(e) => setDeactivationReason(e.target.value)}
              className="w-full bg-[#1a1a2e] border border-gray-600 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb]"
              placeholder="Motivo da desativação..."
              rows={4}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowDeactivateModal(false);
                  setDeactivationReason('');
                  setSelectedUser(null);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white focus:outline-none"
              >
                Cancelar
              </button>
              <button
                onClick={handleDeactivateUser}
                disabled={!deactivationReason.trim()}
                className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none"
              >
                Desativar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Alterar Senha */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#16162a] rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-white">Alterar Senha</h2>
            <p className="text-gray-300 mb-4">
              Alterando senha do usuário {selectedUser?.name}
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Nova Senha
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-[#1a1a2e] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb]"
                  placeholder="Digite a nova senha"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Confirmar Nova Senha
                </label>
                <input
                  type="password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-[#1a1a2e] border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-[#2563eb] focus:border-[#2563eb]"
                  placeholder="Confirme a nova senha"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setShowPasswordModal(false);
                  setNewPassword('');
                  setConfirmNewPassword('');
                  setSelectedUser(null);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white focus:outline-none"
              >
                Cancelar
              </button>
              <button
                onClick={handlePasswordChange}
                disabled={!newPassword || !confirmNewPassword || loading}
                className="px-4 py-2 bg-[#2563eb] text-white text-sm font-medium rounded-md hover:bg-[#3b82f6] focus:outline-none transition-colors"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                Alterar Senha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}