import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

interface IProtectedRoute {
  children: JSX.Element;
  to: string;
}
const ProtectedRoute = ({ children, to }: IProtectedRoute) => {
  const { user } = useAuthContext();
  if (user) {
    return <Navigate to={to} />;
  }
  return children;
};

export default ProtectedRoute;
