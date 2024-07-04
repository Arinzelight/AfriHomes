import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/afrihome_logo.png";
import logoMobile from "../images/afrihome_logo_darktheme1.png";
import SearchIcon from "../components/SearchIcon";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    return (
        <div>
            <header className="flex justify-between p-6 items-center">
                {/* Logo */}
                <div className={`${isSearchOpen ? "hidden" : "flex"} items-center h-20 w-40 my-[-30px]`}>
                    <img 
                        src={logo} 
                        alt="AfriHomes-logo" 
                        className="hidden lg:block h-40 w-40 object-contain ml-6" 
                    />
                    <img 
                        src={logoMobile} 
                        alt="AfriHomes-logo-mobile" 
                        className="block lg:hidden h-40 w-40 object-contain ml--3" 
                    />
                </div>

                {/* Search Bar */}
                <form onSubmit={handleSearchSubmit} className={`relative ${isSearchOpen ? "flex" : "hidden lg:flex"} items-center w-full lg:w-1/2 mx-4`}>
                    <input
                        type="text"
                        placeholder="City, Location, Address, School, ZIP Code"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search sm:pl-10 pl-6 py-2 w-full border rounded-lg sm:text-base text-xs text-black focus:outline-none"
                    />
                    <div className="absolute inset-y-0 sm:left-3 left-1 flex items-center pointer-events-none">
                        <SearchIcon color="gray" />
                    </div>
                </form>

                {/* Navigation */}
                <div className="hidden lg:flex space-x-4">
                  <Link to="/" className="hover:text-yellow-500">
                    Buy
                  </Link>
                  <Link to="/new-post" className="hover:text-yellow-500">
                    Sell
                  </Link>
                  <Link to="/new-post" className="hover:text-yellow-500">
                    Rent
                  </Link>
                  <Link to="/sign-in">
                    <button className=" bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                      Join/Sign In
                    </button>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center space-x-4 sm:text-base text-sm">
                    <div onClick={() => setIsSearchOpen(!isSearchOpen)} className="cursor-pointer">
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
                  <div className="lg:hidden absolute top-16 left-0 right-0 bg-white opacity-90 z-50  shadow-md">
                    <div className="flex flex-col items-center p-4 space-y-4">
                      <Link to="/" className="text-black hover:text-yellow-500">
                        Buy
                      </Link>
                      <Link to="/new-post" className="text-black hover:text-yellow-500">
                        Sell
                      </Link>
                      <Link to="/new-post" className="text-black hover:text-yellow-500">
                        Rent
                      </Link>
                      <Link to="/sign-in">
                        <button className="cursor-pointer join-btn bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                          Join/Sign In
                        </button>
                      </Link>
                    </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;