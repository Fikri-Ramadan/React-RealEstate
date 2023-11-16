import { useQuery } from 'react-query';
import { getAllProperties } from '../utils/api';

const useProperties = (props) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: 'allProperties',
    queryFn: () => getAllProperties(props?.page, props?.search),
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
