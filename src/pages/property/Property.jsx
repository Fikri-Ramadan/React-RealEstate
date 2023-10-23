import { getProperty } from '../../utils/api';
import './Property.css';
import { useQuery } from 'react-query';
import { PuffLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';
import { AiFillHeart, AiTwotoneCar } from 'react-icons/ai';
import { FaShower } from 'react-icons/fa';
import { MdMeetingRoom, MdLocationPin } from 'react-icons/md';
import Map from '../../components/map/Map';

const Property = () => {
  const location = useLocation();

  const id = location.pathname.split('/').slice(-1)[0];

  const { data, isLoading, isError } = useQuery({
    queryKey: ['property', id],
    queryFn: () => getProperty(id),
  });

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

  const { residency } = data;
  console.log(residency);

  return (
    <div className="wrapper">
      <div className="paddings innerWidth property-container">
        <div className="property-image">
          <div className="like">
            <AiFillHeart size={24} color="white" />
          </div>
          <img src={residency?.image} alt="" />
        </div>
        <div className="property-details">
          {/* left side*/}
          <div className="left">
            <div className="head">
              <div className="primaryText">{residency?.title}</div>
              <div className="orangeText">$ {residency?.price}</div>
            </div>
            <div className="facilities">
              {/* bathrooms */}
              <div className="facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{residency?.facilities?.bathrooms} Bathrooms</span>
              </div>
              {/* parkings */}
              <div className="facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span>{residency?.facilities?.parking} Parking</span>
              </div>
              {/* rooms */}
              <div className="facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>{residency?.facilities?.bedrooms} Rooms</span>
              </div>
            </div>

            {/* description */}
            <span className="secondaryText" style={{ textAlign: 'justify' }}>
              {residency?.description}
            </span>

            {/* address */}
            <div className="address">
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {residency?.address}, {residency?.city}, {residency?.country}
              </span>
            </div>

            {/* booking button */}
            <button className="button">Book your visit</button>
          </div>

          {/* right side */}
          <div className="map">
            <Map
              address={residency?.address}
              city={residency?.city}
              country={residency?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
