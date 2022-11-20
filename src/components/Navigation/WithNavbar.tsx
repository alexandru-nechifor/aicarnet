import { Outlet } from 'react-router-dom';
import EmailVerified from '../user/EmailVerified';
import Navbar from './Navbar';

const WithNavbar = () => {
  return (
    <>
      <Navbar />
      <EmailVerified />
      <Outlet />
    </>
  );
};

export default WithNavbar;
