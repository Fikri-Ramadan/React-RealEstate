import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { sliderSettings } from '../../utils/common';
import 'swiper/css';
import data from '../../utils/slider.json';
import './Residencies.css';

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="innerWidth paddings r-container">
        <div className="r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt="" />

                <span className="secondaryText r-price">
                  <span style={{ color: 'orange' }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  
  return <div className="r-buttons">
    <button onClick={() => swiper.slidePrev()}>&lt;</button>
    <button onClick={() => swiper.slideNext()}>&gt;</button>
  </div>
}
