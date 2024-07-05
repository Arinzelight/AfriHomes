import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 10.8231, // Default latitude (e.g., Abuja, Nigeria)
  lng: 7.491302, // Default longitude (e.g., Abuja, Nigeria)
};

const GoogleMapComponent = ({ latitude, longitude }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // Access the API key from the .env file

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: latitude, lng: longitude }}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
