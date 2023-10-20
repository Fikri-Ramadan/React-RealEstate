import SearchBar from '../../components/searchBar/SearchBAr';
import useProperties from '../../hooks/useProperties';
import { PuffLoader } from 'react-spinners';
import './properties.css';
import PropertyCard from '../../components/propertyCard/PropertyCard';

const Properties = () => {
  const { data, isLoading, isError } = useProperties();

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

  const { residencies } = data;

  return (
    <div className="wrapper">
      <div className="innerWidth paddings properties-container">
        <SearchBar />
        <div className="properties-card-container">
          {residencies?.map((card, i) => (
            <PropertyCard card={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
