import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth f-container">
        <div className="f-left">
          <div className="logo">
            <img src="./logo2.png" alt="" width={120} />
          </div>
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them
          </span>
        </div>
        <div className="f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Jakarta, Indonesia</span>
          <div className="f-menu">
            <span>property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
