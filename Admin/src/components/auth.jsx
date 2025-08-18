import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // ✅ Correct for version 4.x+

const RequireAuth = ({ children }) => {
  const token = localStorage.getItem('token');
  console.log('Token in RequireAuth:', token); // Debug
  if (!token) return <Navigate to="/login" />;

  try {
    const decoded = jwtDecode(token);
    console.log('Decoded token:', decoded); // Debug
    const isExpired = decoded.exp * 1000 < Date.now();
    return isExpired ? <Navigate to="/login" /> : children;
  } catch (err) {
    console.error('Token decode error:', err); // Debug
    return <Navigate to="/login" />;
  }
};

export default RequireAuth;
