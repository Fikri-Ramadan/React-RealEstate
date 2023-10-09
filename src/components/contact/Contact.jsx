import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth c-container">
        <div className="c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            believe a good place to live can make your live better
          </span>
          <div className="contact-modes">
            <div className="row">
              <div className="contact-card">
                <div className="card-header">
                  <div className="icon">
                    <MdCall size={25} />
                  </div>
                  <div className="detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 456 789</span>
                  </div>
                </div>
                <div className="button">Call Now</div>
              </div>
              <div className="contact-card">
                <div className="card-header">
                  <div className="icon">
                    <MdCall size={25} />
                  </div>
                  <div className="detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 456 789</span>
                  </div>
                </div>
                <div className="button">Call Now</div>
              </div>
            </div>

            <div className="row">
              <div className="contact-card">
                <div className="card-header">
                  <div className="icon">
                    <MdCall size={25} />
                  </div>
                  <div className="detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 456 789</span>
                  </div>
                </div>
                <div className="button">Call Now</div>
              </div>
              <div className="contact-card">
                <div className="card-header">
                  <div className="icon">
                    <MdCall size={25} />
                  </div>
                  <div className="detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 456 789</span>
                  </div>
                </div>
                <div className="button">Call Now</div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-right">
          <div className="c-image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
