import { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const getMenuStyles = (menuOpen) => {
  if (document.documentElement.clientWidth <= 800) {
    return { right: !menuOpen && '-100%' };
  }
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth h-container">
        <div className="h-logo">
          <img src="./logo.png" alt="" />
        </div>

        <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
          <div className="h-menu" style={getMenuStyles(isOpen)}>
            <a href="">Residencies</a>
            <a href="">Out Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
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
