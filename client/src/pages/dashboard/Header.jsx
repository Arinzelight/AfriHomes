import React, { useState } from "react";
import logo from "../../images/afrihome_logo.png";
// import logoMobile from "../../images/afrihome_logo_darktheme1.png";
import SearchIcon from "../../components/SearchIcon";
import AvatarIcon from "./AvatarIcon";
import NotificationIcon from "./NotificationIcon";
import MessengerIcon from "./MessengerIcon";
import FavoriteIcon from "./FavoriteIcon";

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAvatarOpen, setIsAvatarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isAvatarOpen) setIsAvatarOpen(false);
    };

    const toggleAvatarMenu = () => {
        setIsAvatarOpen(!isAvatarOpen);
        if (isMenuOpen) setIsMenuOpen(false);
    };

    return (
        <div>
            <header className="flex justify-between p-6 items-center border-b pb-4">
                {/* Logo */}
                <div className={`${isSearchOpen ? "hidden" : "flex"} items-center h-20 w-40 my-[-30px]`}>
                    <img 
                        src={logo} 
                        alt="AfriHomes-logo" 
                        className="hidden lg:block h-40 w-40 object-contain ml-6" 
                    />
                    <img 
                        src={logo} 
                        alt="AfriHomes-logo-mobile" 
                        className="block lg:hidden h-40 w-40 object-contain ml-[-3]" 
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
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="hover:text-yellow-500 md:font-bold">Buy</a>
                    <a href="#" className="hover:text-yellow-500 md:font-bold">Sell</a>
                    <a href="#" className="hover:text-yellow-500 md:font-bold">Rent</a>
                </div>

                {/* Icons */}
                <div className="hidden lg:flex space-x-4 items-center">
                    <MessengerIcon />
                    <FavoriteIcon />
                    <NotificationIcon />
                    <AvatarIcon />
                </div>

                {/* Mobile Search Button */}
                <div className="lg:hidden flex items-center space-x-4 sm:text-base text-sm">
                    <div onClick={() => setIsSearchOpen(!isSearchOpen)} className="cursor-pointer">
                        <SearchIcon color="black" />
                    </div>
                </div>

                {/* Mobile Search Button */}
                <div className="md:hidden flex items-center space-x-4 sm:text-base text-sm">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white bg-opacity-80 shadow-md">
                        <div className="flex flex-col items-center p-4 space-y-4">
                            <a href="#" className="text-black hover:text-yellow-500">Buy</a>
                            <a href="#" className="text-black hover:text-yellow-500">Sell</a>
                            <a href="#" className="text-black hover:text-yellow-500">Rent</a>
                        </div>
                    </div>
                )}

                {/* Mobile User Icon */}
                <div className="lg:hidden items-center space-x-2">
                    <div onClick={toggleAvatarMenu}>
                        <AvatarIcon />
                    </div>
                    {isAvatarOpen && (
                        <div className="lg:hidden absolute justify-items-end top-20 left-40 right-3 bg-white bg-opacity-80 shadow-md">
                            <div className="flex flex-col items-end p-2 space-y-2">
                                <MessengerIcon />
                                <FavoriteIcon />
                                <NotificationIcon />
                            </div>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Header;