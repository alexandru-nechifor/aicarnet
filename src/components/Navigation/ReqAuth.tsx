import { useAuthContext } from '../../context/AuthContext';
import NotRegistered from '../user/NotRegistered';

interface IReqAuth {
  children: JSX.Element;
}

const ReqAuth = ({ children }: IReqAuth) => {
  const { user } = useAuthContext();
  if (user) {
    return children;
  } else {
    return <NotRegistered />;
  }
};

export default ReqAuth;
