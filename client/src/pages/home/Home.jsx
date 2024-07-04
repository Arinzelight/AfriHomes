import React from "react";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Experience from "./Experience";
// import GoogleMapComponent from "../../components/GoogleMap";
import DreamSpace from "./DreamSpace";
import RecentUploads from "./RecentUploads";
import AfriHomeForm from "./AfriHomeForm";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      {/* <GoogleMapComponent /> */}
      <Experience />
      <DreamSpace />
      <RecentUploads />
      <AfriHomeForm />
      <Footer />
    </div>
  );
};

export default Home;
