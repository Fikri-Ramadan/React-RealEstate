import { useQuery } from 'react-query';
import { getAllProperties } from '../utils/api';

const useProperties = (page) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: 'allProperties',
    queryFn: () => getAllProperties(page),
    refetchOnWindowFocus: true,
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useProperties;
