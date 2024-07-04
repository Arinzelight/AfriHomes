import React, { useState, useEffect } from "react";
import logo from "../assets/images/afrihome_logo.png";
import SearchIcon from "../components/SearchIcon";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Assuming you're using Firebase for authentication

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUserAvatar(user.photoURL); // Assuming user has a photoURL property
      } else {
        setIsAuthenticated(false);
        setUserAvatar("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      // Redirect to search page with query parameter
      window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div>
      <header className="flex justify-between p-6 mb-5">
        {/* Logo */}
        <div className="flex items-center h-20 w-40 my-[-20px]">
          <Link to="/">
            <img
              src={logo}
              alt="AfriHomes-logo"
              className="h-40 w-40 object-contain"
            />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center w-1/2 mx-4 relative">
          <input
            type="text"
            placeholder="City, Location, Address, School, ZIP Code"
            className="search text-black pl-10 py-2 w-full border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <SearchIcon color="gray" />
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex space-x-4 items-center">
          <Link to="/search" className="hover:text-yellow-500">
            Buy
          </Link>
          <Link to="/new-post" className="hover:text-yellow-500">
            Sell
          </Link>
          <Link to="/new-post" className="hover:text-yellow-500">
            Rent
          </Link>
          {isAuthenticated ? (
            <img
              src={userAvatar || "default-avatar.png"} // Use a default avatar if user doesn't have one
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <Link to="/sign-in">
              <button className=" bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                Join/Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <div className="mx-10">
            <Link to="/search">
              <SearchIcon color="black" />
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
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
              {isAuthenticated ? (
                <img
                  src={userAvatar || "default-avatar.png"} // Use a default avatar if user doesn't have one
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <Link to="/sign-in">
                  <button className="cursor-pointer join-btn bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                    Join/Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
