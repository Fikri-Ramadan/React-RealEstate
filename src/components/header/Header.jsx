import { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ProfileMenu from '../profileMenu/ProfileMenu';

// const getMenuStyles = (menuOpen) => {
//   if (document.documentElement.clientWidth <= 800) {
//     return { right: !menuOpen && '-100%' };
//   }
// };

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth h-container">
        <div className="h-logo">
          <Link to="/">
            <img src="/logo.png" alt="" />
          </Link>
        </div>

        <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
          {/* <div className="h-menu" style={getMenuStyles(isOpen)}> */}
          <div className={`h-menu ${isOpen && 'open-menu'}`}>
            <NavLink to="/properties">Properties</NavLink>
            <a href="mailto:fikriramadan.tech@gmail.com">Contact</a>
            {isAuthenticated ? (
              <ProfileMenu user={user} logout={logout} />
            ) : (
              <button className="button" onClick={() => loginWithRedirect()}>
                Login
              </button>
            )}
          </div>

          <div
            className="menu-icon"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <BiMenuAltRight size={30} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};
export default Header;
