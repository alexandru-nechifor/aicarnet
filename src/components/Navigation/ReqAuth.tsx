import { useAuth } from '../../context/AuthContext';
import NotRegistered from '../user/NotRegistered';

interface IReqAuth {
  children: JSX.Element;
}

const ReqAuth = ({ children }: IReqAuth) => {
  const { currentUser } = useAuth();
  if (currentUser) {
    return children;
  } else {
    return <NotRegistered />;
  }
};

export default ReqAuth;
