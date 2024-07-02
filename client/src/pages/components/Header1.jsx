import React from "react";
import logo from "../images/afrihome_logo.png";
import "../styles/Header1.css";
import SearchIcon from "../components/SearchIcon";

const Header = () => {
    return (
        <div>
            <header className="flex justify-between items-center p-6">
                <div className="w-1/4 logo">
                    <img src={ logo } alt="AfriHomes-logo" />
                </div>
                <div className="w-1/2 flex flex-grow mx-4 searchBar">
                    <div className="w-full">
                        <input type="text" placeholder="City, Location, Address, School, ZIP Code" className="search" />
                    </div>
                    <div className="flex-grow flex items-center pointer-events-none searchIcon">
                        <SearchIcon color="white" />
                    </div>
                </div>
                <div className="w-1/4 flex flex-row justify-end nav">
                    <nav className="flex space-x-4 menu">
                        <a href="#" className="hover:text-yellow-500">Buy</a>
                        <a href="#" className="hover:text-yellow-500">Sell</a>
                        <a href="#" className="hover:text-yellow-500">Rent</a>
                        <button className="join-btn">Join/Sign In</button>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;