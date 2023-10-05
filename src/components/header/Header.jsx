import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth h-container">
        <div className="h-logo">
          <img src="./logo.png" alt="" />
        </div>
        <div className="h-menu">
          <a href="">Residencies</a>
          <a href="">Out Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Header;
