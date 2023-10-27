import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import UserDetailsContext from '../../context/UserDetailsContext';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from 'react-query';
import { createUser } from '../../utils/api';

const Layout = () => {
  const { isAuthenticated, user } = useAuth0();
  const { setUserDetails } = useContext(UserDetailsContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email),
  });

  useEffect(() => {
    isAuthenticated && mutate();
  }, [isAuthenticated]);

  return (
    <>
      <div
        style={{
          background: 'var(--black)',
          overflowX: 'clip',
          position: 'relative',
        }}
      >
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
