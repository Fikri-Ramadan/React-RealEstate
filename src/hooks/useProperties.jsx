import { useQuery } from 'react-query';
import { getAllProperties } from '../utils/api';

const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: 'allProperties',
    queryFn: getAllProperties,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useProperties;
