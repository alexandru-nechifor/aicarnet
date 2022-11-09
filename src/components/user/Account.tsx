import { useAuth } from '../../context/AuthContext';

function Account() {
  const { currentUser } = useAuth();

  return <div>Account {currentUser?.email}</div>;
}

export default Account;
