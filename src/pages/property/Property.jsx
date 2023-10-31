import { getProperty, removeBookedVisit } from '../../utils/api';
import './Property.css';
import { useMutation, useQuery } from 'react-query';
import { PuffLoader } from 'react-spinners';
import { useLocation } from 'react-router-dom';
import { AiTwotoneCar } from 'react-icons/ai';
import { FaShower } from 'react-icons/fa';
import { MdMeetingRoom, MdLocationPin } from 'react-icons/md';
import Map from '../../components/map/Map';
import { useContext, useState } from 'react';
import useAuthCheck from '../../hooks/useAuthCheck';
import BookingModal from '../../components/bookingModal/BookingModal';
import { useAuth0 } from '@auth0/auth0-react';
import UserDetailsContext from '../../context/UserDetailsContext';
import { Button } from '@mantine/core';
import { toast } from 'react-toastify';
import Heart from '../../components/heart/Heart';

const Property = () => {
  const location = useLocation();

  const id = location.pathname.split('/').slice(-1)[0];
  const [isModalOpened, setModealOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();
  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailsContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBookedVisit(user?.email, id, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking.id !== id),
      }));

      toast.success('Booking cancelled', { position: 'bottom-right' });
    },
  });

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

  return (
    <div className="wrapper">
      <div className="paddings innerWidth property-container">
        <div className="property-image">
          <div className="like">
            <Heart id={id} />
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
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  fullWidth
                  variant="outline"
                  color="red"
                  onClick={() => cancelBooking()}
                  disabled={cancelling}
                >
                  Cancel Booking
                </Button>
                <span>
                  Your visit already booked for date{'  '}
                  {bookings?.filter((booking) => booking.id === id)[0].date}
                </span>
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  validateLogin() && setModealOpened(true);
                }}
              >
                Book your visit
              </button>
            )}

            <BookingModal
              opened={isModalOpened}
              setModalOpened={setModealOpened}
              propertyId={id}
              email={user?.email}
            />
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
