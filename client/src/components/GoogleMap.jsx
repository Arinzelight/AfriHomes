import React, { useEffect } from 'react';

const GoogleMap = () => {
    useEffect(() => {
        // Load the Google Maps script when the component mounts
        const loadGoogleMapsScript = () => {
          if(!window.google) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=key&callback=console.debug&libraries=maps,marker&v=beta`;
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
                center: { lat: 10.8231, lng: 7.491302 },
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

export default GoogleMap;
