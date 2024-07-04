import React, { useEffect } from 'react';

// const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const GoogleMapComponent = () => {
    useEffect(() => {
        // Load the Google Maps script when the component mounts
        const loadGoogleMapsScript = () => {
          if(!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=console.debug&libraries=maps,marker&v=beta`;
            script.defer = true;
            script.onload = () => {
              window.initMap();
            };

            document.body.appendChild(script);
          } else {
            window.initMap();
          }
        };

        // Initialize the map after the script has been loaded
        window.initMap = () => {
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: 13.531665, lng: 2.460415 },
                zoom: 8,
            });
        };

        loadGoogleMapsScript();
    }, []);

    return (
        <div>
            <div id="map" style={{ height: '400px', width: '100%' }}></div>
        </div>
    );
};

export default GoogleMapComponent;