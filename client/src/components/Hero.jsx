import React from "react";
import logo from '../images/afrihome_logo.png';
import heroImg from '../images/LandingPage/HeaderImg.jpg';
import SearchIcon from './SearchIcon';
import '../styles/Hero.css';

const Hero = () => {
    return (
      <div className="hero bg-cover bg-center text-white h-screen flex flex-col justify-between">
        <header className="flex justify-between items-center p-6 bg-opacity-50 bg-black">
          <div className="logo">
            <img src={ logo } alt="AfriHomes-logo" />
          </div>
          <div className="searchBar flex-grow mx-4">
            <input type="text" placeholder="City, Location, Address, School, ZIP Code" className="search" />
            <div className="flex-grow absolute inset-y-0 left-3 flex items-center pointer-events-none searchIcon">
                <SearchIcon color="white" />
            </div>
          </div>
          <nav className="menu flex space-x-4">
            <a href="#" className="hover:text-yellow-500">Buy</a>
            <a href="#" className="hover:text-yellow-500">Sell</a>
            <a href="#" className="hover:text-yellow-500">Rent</a>
            <button className="join-btn">Join/Sign In</button>
          </nav>
        </header>
        <div className="flex-grow flex items-center p-6 catchPhrase">
          <div className="bg-white bg-opacity-70 p-8 rounded-lg text-gray-800 max-w-lg text-center">
            <h1 className="text-2xl mb-4">Discover Your Dream Home with AfriHomes</h1>
            <p className="mb-8">
              Find the best properties in Ghana and Nigeria. 
              Whether you are looking to buy, sell, or rent, we have got you covered. 
              AfriHomes is the best place to get your next rent in a safe way, in a safe environment, for you ...</p>
            <button className="hover:bg-green-600 text-white font-bold py-2 px-4 getStarted-btn">Get Started</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;