import React, { useState } from "react";
import logo from "../images/afrihome_logo.png";
import SearchIcon from "../components/SearchIcon";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <header className="flex justify-between p-6">
                {/* Logo */}
                <div className="flex items-center h-20 w-40 my-[-20px]">
                    <img src={logo} alt="AfriHomes-logo" className="h-40 w-40 object-contain ml-8" />
                </div>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center w-1/2 mx-4 relative">
                    <input
                        type="text"
                        placeholder="City, Location, Address, School, ZIP Code"
                        className="search pl-10 py-2 w-full border rounded-lg"
                    />
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <SearchIcon color="gray" />
                    </div>
                </div>

                {/* Navigation */}
                <div className="hidden lg:flex space-x-4">
                    <a href="#" className="hover:text-black-500">Buy</a>
                    <a href="#" className="hover:text-black-500">Sell</a>
                    <a href="#" className="hover:text-black-500">Rent</a>
                    <button className=" bg-purple-600 text-white py-2 px-4 rounded-lg">Join/Sign In</button>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <div className="mx-10">
                        <SearchIcon color="white" />
                    </div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-16 left-0 right-0 bg-white bg-opacity-80 shadow-md">
                        <div className="flex flex-col items-center p-4 space-y-4">
                            <a href="#" className="text-black hover:text-yellow-500">Buy</a>
                            <a href="#" className="text-black hover:text-yellow-500">Sell</a>
                            <a href="#" className="text-black hover:text-yellow-500">Rent</a>
                            <button className="join-btn bg-purple-600 text-white py-2 px-4 rounded-lg">Join/Sign In</button>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;