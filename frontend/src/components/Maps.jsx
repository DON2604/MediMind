import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css'; 
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

const Maps = () => {
  const [center, setCenter] = useState([0, 0]);
  const [doctorsLocations, setDoctorsLocations] = useState([]);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
          generateRandomDoctorsLocations(latitude, longitude);
          // Once the location is obtained, adjust the map view to focus on it
          const map = document.querySelector('.leaflet-container').leafletElement;
          map.setView([latitude, longitude], 13);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const generateRandomDoctorsLocations = (latitude, longitude) => {
    // Generate random locations around the user's location
    const numDoctors = 3; // Number of random doctor locations to generate
    const randomLocations = [];
    for (let i = 0; i < numDoctors; i++) {
      // Generate random latitude and longitude around the user's location
      const lat = latitude + (Math.random() - 0.5) * 0.1; // Adjust the range for more accurate results
      const lng = longitude + (Math.random() - 0.5) * 0.1; // Adjust the range for more accurate results
      randomLocations.push([lat, lng]);
    }
    setDoctorsLocations(randomLocations);
  };

  return (
    <div>
      <div id="map" className='mt-4 h-[540px] w-[1300px] m-10 p-4'>
        <MapContainer center={center} zoom={13} style={{ width: '100%', height: '100%' }} className='w-[1500px]'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center}>
            <Popup>
              Your Location
            </Popup>
          </Marker>
          {doctorsLocations.map((pos, index) => (
            <Marker key={index} position={pos}>
              <Popup>
                Doctor {index + 1} Location
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Maps;
