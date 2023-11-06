import countries from 'world-countries';

const formatedCountries = countries.map((country) => ({
  value: country.name.common,
  label: `${country.name.common} ${country.flag}`,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formatedCountries;
  return { getAll };
};

export default useCountries;
