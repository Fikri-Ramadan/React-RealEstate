import { useQuery } from 'react-query';
import { getAllFavourites } from '../utils/api';
import { useContext, useEffect, useRef } from 'react';
import UserDetailsContext from '../context/UserDetailsContext';
import { useAuth0 } from '@auth0/auth0-react';

const useFavourites = () => {
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailsContext);
  const { user } = useAuth0();
  const queryRef = useRef();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: 'allFavourites',
    queryFn: () => getAllFavourites(user?.email, token),
    onSuccess: (data) =>
      setUserDetails((prev) => ({ ...prev, favourites: data?.favourites })),
    enabled: user !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [token]);

  return { data, isLoading, isError, refetch };
};

export default useFavourites;
