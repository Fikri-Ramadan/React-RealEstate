import { useContext, useEffect, useRef } from 'react';
import UserDetailsContext from '../context/UserDetailsContext';
import { useQuery } from 'react-query';
import { getAllBookings } from '../utils/api';
import { useAuth0 } from '@auth0/auth0-react';

const useBookings = () => {
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailsContext);
  const { user } = useAuth0();
  const queryRef = useRef();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: 'allBookings',
    queryFn: () => getAllBookings(user?.email, token),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, bookings: data?.bookedVisits })),
    enabled: user !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [token]);

  return { data, isLoading, isError, refetch };
};

export default useBookings;
