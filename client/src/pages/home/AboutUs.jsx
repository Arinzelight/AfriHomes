import React from "react";
import logo from "../../assets/images/afrihome_logo.png";
import { Link } from "react-router-dom";
import GoogleMapComponent from "../../components/GoogleMap"; // Import GoogleMapComponent

const AboutUs = () => {
  return (
    <div className="sm:px-10 sm-px-0 py-12">
      {/* First row: About Us header */}
      <div className="m-10">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
      </div>
      {/* Second row: two columns */}
      <div className="flex px-4 gap-[4rem] sm:flex-row flex-col sm:justify-center justify-between sm:items-center items-center">
        {/* First column: Logo */}

        {/* Second column: Text and button */}
        <div className="sm:bottom-[200px] bottom-2">
          <p className="mb-4 my-[-20px] text-center  text-lg">
            We recognize the pain of using a renting platform with no location
            attached. We have therefore decided to add a map feature tailored to
            ensure your safety as you hunt your next space you will call home.
          </p>
          <div className="grid justify-items-center mb-8">
            <Link to="./sign-in">
              {" "}
              {/* <button className=" text-white  bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-lg">
                Join / Sign In
              </button> */}
            </Link>
          </div>
          {/* Render GoogleMapComponent with default coordinates */}
          <GoogleMapComponent
            latitude={6.5244} // Default latitude for Lagos
            longitude={3.3792} // Default longitude for Lagos
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
