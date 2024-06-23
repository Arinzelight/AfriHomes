import React from "react";
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import GoogleMapComponent from "../components/GoogleMap";
import Experience from '../components/Experience';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <GoogleMapComponent />
      <Experience />
    </div>
  );
};

export default Home;