import './BookingModal.css';
import { Modal, Button } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useContext, useState } from 'react';
import { useMutation } from 'react-query';
import UserDetailsContext from '../../context/UserDetailsContext';
import { bookingVisit } from '../../utils/api';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

const BookingModal = ({ opened, setModalOpened, propertyId, email }) => {
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailsContext);
  const [value, setValue] = useState(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookingVisit(email, propertyId, value, token),
    onSuccess: () => handleSuccess(),
    onError: ({ response }) => toast.error(response?.data?.message),
    onSettled: () => setModalOpened(false),
  });

  const handleSuccess = () => {
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(value).format('DD/MM/YYYY'),
        },
      ],
    }));
    toast.success('You have booked your visit', { position: 'bottom-right' });
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setModalOpened(false)}
      title="Booking Your Visits"
    >
      <div className="modal-container">
        <DatePicker
          allowDeselect
          value={value}
          onChange={setValue}
          minDate={new Date()}
        />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book Visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
