import React, { useState } from "react";
import logo from "../assets/images/afrihome_logo.png";
import SearchIcon from "../components/SearchIcon";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice"; // Import the signoutSuccess action
import Avatar from "react-avatar"; // Import Avatar component from react-avatar

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the signoutSuccess action to update Redux state
    dispatch(signoutSuccess());
    // Perform additional logout actions (e.g., clear local storage, redirect user)
    // Example:
    // localStorage.removeItem("authToken");
    // history.push("/signin"); // Redirect to sign-in page
  };

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
        <div className="flex items-center w-[5.5rem] h-20 sm:w-40 my-[-20px]">
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
        <div className=" flex  items-center gap-4 ">
          <Link to="./search " className="sm:hidden visible h-3">
            <SearchIcon color="purple" />
          </Link>
          <Link to="/search" className="hover:text-yellow-500">
            Buy
          </Link>
          <Link to="/new-post" className="hover:text-yellow-500">
            Sell
          </Link>
          <Link to="/new-post" className="hover:text-yellow-500">
            Rent
          </Link>
          {currentUser ? (
            <div className="relative">
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center focus:outline-none"
                >
                  <Avatar
                    size="40"
                    round={true}
                    name={currentUser.displayName || "User"}
                    src={currentUser.photoURL}
                    alt="User Avatar"
                    className="cursor-pointer"
                  />
                </button>
                {isMenuOpen && (
                  <div className="absolute top-12 right-0 bg-white shadow-md rounded-md py-2  w-40 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Link to="/sign-in">
              <button className=" bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                Join/Sign In
              </button>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
