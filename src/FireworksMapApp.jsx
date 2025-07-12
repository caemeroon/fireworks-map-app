import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const stores = [
  {
    id: 1,
    name: 'Big Boom Fireworks',
    coords: [34.7465, -92.2896],
    address: '123 Main St, Little Rock, AR',
  },
  {
    id: 2,
    name: 'Rocket Town Fireworks',
    coords: [36.0726, -94.2088],
    address: '456 Maple Ave, Fayetteville, AR',
  }
];

export default function FireworksMapApp() {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <div className="w-full h-screen">
      <MapContainer
        center={[34.7465, -92.2896]}
        zoom={7}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {stores.map((store) => (
          <Marker
            key={store.id}
            position={store.coords}
            eventHandlers={{ click: () => setSelectedStore(store) }}
          >
            <Popup>
              <strong>{store.name}</strong>
              <br />
              {store.address}
              <br />
              <button
                onClick={() => alert(`Feature coming soon: Add prices for ${store.name}`)}
                style={{
                  marginTop: '8px',
                  padding: '4px 8px',
                  backgroundColor: '#2563eb',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Submit Price
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
