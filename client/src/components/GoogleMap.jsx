import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 10.8231,  // Default latitude (e.g., Abuja, Nigeria)
  lng: 7.491302  // Default longitude (e.g., Abuja, Nigeria)
};

const GoogleMapComponent = () => {
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with the actual API key

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;