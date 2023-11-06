import '../properties/Properties.css';
import { PuffLoader } from 'react-spinners';
import useProperties from '../../hooks/useProperties';
import SearchBar from '../../components/searchBar/SearchBar';
import { useContext, useState } from 'react';
import PropertyCard from '../../components/propertyCard/PropertyCard';
import UserDetailsContext from '../../context/UserDetailsContext';

const Bookings = () => {
  const { data, isLoading, isError } = useProperties();
  const [filter, setFilter] = useState('');
  const {
    userDetails: { bookings },
  } = useContext(UserDetailsContext);

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="loading-container">
          <PuffLoader
            width="80"
            height="80"
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
    <div className="wrapper">
      <div className="innerWidth paddings properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />
        <div className="properties-card-container">
          {residencies
            ?.filter((residency) =>
              bookings.map((booking) => booking.id).includes(residency.id)
            )
            .filter(
              (residency) =>
                residency.title.toLowerCase().includes(filter.toLowerCase()) ||
                residency.city.toLowerCase().includes(filter.toLowerCase()) ||
                residency.country.toLowerCase().includes(filter.toLowerCase())
            )
            .map((residency, i) => (
              <PropertyCard card={residency} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
