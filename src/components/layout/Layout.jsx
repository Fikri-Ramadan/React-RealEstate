import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div
        style={{
          background: 'var(--black)',
          overflowX: 'clip',
          position: 'relative'
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
