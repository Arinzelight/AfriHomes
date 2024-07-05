import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px", // Adjust height as needed
};

const GoogleMapComponent = ({ latitude, longitude }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // Access the API key from the .env file

  return (
    <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: latitude, lng: longitude }}
        zoom={12} // Adjust zoom level as needed
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
