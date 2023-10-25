import { MapContainer, TileLayer } from 'react-leaflet';
import GeoCoderMarker from '../geoCoderMarker/GeoCoderMaker';

const Map = ({ address, city, country }) => {
  return (
    <MapContainer
      center={[53.35, 18.8]}
      zoom={10}
      scrollWheelZoom={false}
      style={{
        height: '50vh',
        width: '100%',
        marginTop: '20px',
        zIndex: '0',
        borderRadius: '10px'
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};

export default Map;
