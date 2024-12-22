import { BrowserRouter as Router, Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { PWAProvider } from './contexts/PWAContext';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import UserLayout from './pages/user/Layout';
import AdminLayout from './pages/admin/Layout';
import Overview from './pages/user/Overview';
import Chat from './pages/user/Chat';
import NewRequest from './pages/user/NewRequest';
import Requests from './pages/user/Requests';
import Settings from './pages/user/Settings';
import AdminDashboard from './pages/admin/Dashboard';
import AdminMessages from './pages/admin/Messages';
import AdminUsers from './pages/admin/Users';
import AdminSettings from './pages/admin/Settings';
import UserArts from './pages/admin/UserArts';
import PrivateRoute from './components/PrivateRoute';
import InstallPWA from './components/InstallPWA';
import { useAuth } from './contexts/AuthContext';
import InstallPage from './pages/InstallPage';

function HomeRedirect() {
  const { isAdmin } = useAuth();
  return <Navigate to={isAdmin ? "/admin" : "/"} />;
}

function AppRoutes() {
  return (
    <>
      <Toaster position="top-right" />
      <InstallPWA />
      <ReactRoutes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/install" element={<InstallPage />} />
        
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
          <Route path="messages" element={<AdminMessages />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="user-arts" element={<UserArts />} />
        </Route>

        {/* Rotas do usuário */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="chat" element={<Chat />} />
          <Route path="new-request" element={<NewRequest />} />
          <Route path="requests" element={<Requests />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/" element={<HomeRedirect />} />
      </ReactRoutes>
    </>
  );
}

export default function App() {
  return (
    <PWAProvider>
      <ThemeProvider>
        <Router>
          <AuthProvider>
            <NotificationProvider>
              <AppRoutes />
            </NotificationProvider>
          </AuthProvider>
        </Router>
      </ThemeProvider>
    </PWAProvider>
  );
}