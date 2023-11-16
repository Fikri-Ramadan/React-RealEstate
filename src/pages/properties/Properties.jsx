import SearchBar from '../../components/searchBar/SearchBar';
import useProperties from '../../hooks/useProperties';
import { PuffLoader } from 'react-spinners';
import './Properties.css';
import PropertyCard from '../../components/propertyCard/PropertyCard';
import { useState, useEffect } from 'react';
import Paginations from '../../components/pagination/Paginations';

const Properties = () => {
  const [activePage, setPage] = useState(1);
  const [filter, setFilter] = useState('');

  const { data, isLoading, isError, refetch } = useProperties({
    page: activePage,
    search: filter,
  });

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      refetch();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [filter]);

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

  const { residencies, totalPage } = data;

  return (
    <div className="wrapper">
      <div className="innerWidth paddings properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />
        <div className="properties-card-container">
          {residencies?.map((residency, i) => (
            <PropertyCard card={residency} key={i} />
          ))}
        </div>
        <Paginations
          totalPage={totalPage}
          activePage={activePage}
          setPage={setPage}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default Properties;
