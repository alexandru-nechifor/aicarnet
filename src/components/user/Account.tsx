import { useAuth } from '../../context/AuthContext';

function Account() {
  const { currentUser } = useAuth();

  console.log(currentUser?.emailVerified);
  return <div>Account</div>;
}

export default Account;
