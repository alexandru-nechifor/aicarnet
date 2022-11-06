import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

function Account() {
  const { currentUser } = useAuth();

  return <div>Account</div>;
}

export default Account;
