import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function MapView({ positions }) {
  return (
    <MapContainer center={[-22.0, -45.0]} zoom={6} style={{ height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.map((p, i) => (
        <Marker key={i} position={[p.lat, p.lng]}>
          <Popup>{`Equipamento: ${p.id}`}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}