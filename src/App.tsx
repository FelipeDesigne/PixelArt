import { HashRouter as Router, Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import AdminLayout from './layouts/AdminLayout';
import UserLayout from './layouts/UserLayout';
import AdminDashboard from './pages/admin/Dashboard';
import Users from './pages/admin/Users';
import Requests from './pages/admin/Requests';
import Messages from './pages/admin/Messages';
import AdminSettings from './pages/admin/Settings';
import Overview from './pages/user/Overview';
import Settings from './pages/user/Settings';
import Profile from './pages/user/Profile';
import NewRequest from './pages/user/NewRequest';
import Chat from './pages/user/Chat';
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './contexts/AuthContext';

function HomeRedirect() {
  const { isAdmin } = useAuth();
  return <Navigate to={isAdmin ? "/admin" : "/user"} replace />;
}

function AppRoutes() {
  return (
    <>
      <Toaster position="top-right" />
      <ReactRoutes>
        <Route path="/login" element={<Login />} />
        
        {/* Rotas do admin */}
        <Route
          path="/admin"
          element={
            <PrivateRoute requireAdmin>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="requests" element={<Requests />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Rotas do usuário */}
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <UserLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="new-request" element={<NewRequest />} />
          <Route path="chat" element={<Chat />} />
        </Route>

        <Route path="/" element={<HomeRedirect />} />
      </ReactRoutes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <NotificationProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </NotificationProvider>
      </ThemeProvider>
    </Router>
  );
}