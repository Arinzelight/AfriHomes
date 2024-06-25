import React from "react";
import Header from '../../components/Header';
import backgroundImage from '../../images/LandingPage/HeaderImg.jpg';

const Hero = () => {
    return (
      <div className="relative bg-cover bg-center text-white h-screen flex flex-col justify-between hero"
      style={{ backgroundImage: `url(${backgroundImage})` }} >
        <Header />
        <div className="absolute items-center p-6 top-[200px] lg:ml-[45px] ml-0">
          <div className="bg-white bg-opacity-70 p-8 rounded-lg text-gray-800 max-w-lg text-center">
            <h1 className="text-2xl mb-4">Discover Your Dream Home with AfriHomes</h1>
            <p className="mb-8">
              Find the best properties in Ghana and Nigeria. 
              Whether you are looking to buy, sell, or rent, we have got you covered. 
              AfriHomes is the best place to get your next rent in a safe way, in a safe environment, for you ...</p>
            <button className="hover:bg-green-600 text-white font-bold py-2 px-4 bg-purple-600 rounded-md">Get Started</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;