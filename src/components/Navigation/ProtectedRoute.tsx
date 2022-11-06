import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface IProtectedRoute {
  children: ReactJSXElement;
  to: string;
}
const ProtectedRoute = ({ children, to }: IProtectedRoute) => {
  const { currentUser } = useAuth();
  if (currentUser) {
    <Navigate to={to} />;
  }
  return children;
};

export default ProtectedRoute;
