import CountUp from 'react-countup';
import { HiLocationMarker } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="innerWidth hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="secondaryText hero-desc">
            <span>Find a variety of properties that suit you very easily</span>
            <span>Forget all difficulties in finding a residency of you</span>
          </div>

          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className='button'>Search</button>
          </div>

          <div className="stat-container">
            <div className="stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> {' '}
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
