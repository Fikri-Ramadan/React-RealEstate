import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { sliderSettings } from '../../utils/common';
import 'swiper/css';
import './Residencies.css';
import PropertyCard from '../propertyCard/PropertyCard';
import useProperties from '../../hooks/useProperties';
import { PuffLoader } from 'react-spinners';

const Residencies = () => {
  const { data, isLoading, isError } = useProperties();

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="loading-container">
          <PuffLoader
            height="80"
            width="80"
            radius={1}
            color="#4066ff"
            aria-label="puff-loading"
          />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  const { residencies } = data;

  return (
    <section className="r-wrapper">
      <div className="innerWidth paddings r-container">
        <div className="r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {residencies?.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
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

  return (
    <div className="r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
