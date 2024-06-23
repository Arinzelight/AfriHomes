import React from "react";
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import GoogleMapComponent from "../components/GoogleMap";
import Experience from '../components/Experience';
import DreamSpace from "../components/DreamSpace";
import RecentUploads from "../components/RecentUploads";
import AfriHomeForm from "../components/AfriHomeForm";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <GoogleMapComponent />
      <Experience />
      <DreamSpace />
      <RecentUploads />
      <AfriHomeForm />
      <Footer />
    </div>
  );
};

export default Home;