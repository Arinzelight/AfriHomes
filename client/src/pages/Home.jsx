import React from "react";
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import GoogleMapComponent from "../components/GoogleMap";
import Experience from '../components/Experience';
import DreamSpace from "../components/DreamSpace";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <GoogleMapComponent />
      <Experience />
      <DreamSpace />
    </div>
  );
};

export default Home;