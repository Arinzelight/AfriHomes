import React from "react";
import Header from './Header';
// import AvatarIcon from "./AvatarIcon";
import landing10 from "../../assets/images/LandingPage/landing_10.jpg";
import location from "../../assets/images/icons/location_icon.png";
import bed from "../../assets/images/icons/bed_icon.png";
import bath from "../../assets/images/icons/bath_icon.png";
import avatarImage from "../../assets/images/Dashboard/avatar-01.jpg";
import Footer from "../../components/Footer";

const DashBoard = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="container mx-auto mt-3 px-4 border-b pb-4">
                {/* Profile Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <h1 className="text-2xl font-bold">Profile</h1>
                    <button className="bg-purple-600 text-white py-2 px-4 rounded-lg">Logout</button>
                </div>

                {/* Main Content */}
                <div className="flex md:flex-row flex-col mt-2 space-x-2">
                    {/* Left Container */}
                    <div className="">
                        <div className="flex flex-col">
                            <div className="h-40 w-40 mb-4 items-center">
                              {/* <AvatarIcon className="object-cover" /> */}
                              <img src={avatarImage} alt="User Avatar" className="rounded-full object-cover" />
                            </div>
                            <p className="md:text-lg text-sm font-semibold">Name: <span className="font-normal">Nana Adwoa Boadiwaa</span></p>
                            <p className="md:text-lg text-sm font-semibold mt-2">Email: <span className="font-normal font-wrap">nana.b@email.com</span></p>
                            <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg">Update Profile</button>
                        </div>
                    </div>

                    {/* Right Container */}
                    <div className="sm:mt-0 mt-3 sm:px-2 px-1 pb-3">
                        <div className="space-x-2">
                            <div className="flex justify-between items-center border-b pb-2">
                                <h2 className="text-xl font-bold">My List</h2>
                                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg">Create New Post</button>
                            </div>

                            {/* List Item */}
                            <div className="flex sm:flex-row mt-4 flex-col border rounded-lg">
                                <div className="w-80">
                                    <img src={landing10} alt="Item" className="w-full h-auto rounded-lg" />
                                </div>
                                <div className="flex flex-col justify-between sm:px-4 px-1">
                                    <p className="text-base font-bold sm:py-0 py-4">A Great 2 bedrooms 2 bathrooms Apartment near the Beach!</p>
                                    <div className="flex space-x-4">
                                        <div className="flex items-center mb-4">
                                            <img src={location} alt="location-icon" className="w-6 h-6 mr-2" />
                                            <p className="text-base">26 Olusegun Aina St, Ikoyi, Lagos 101233, Lagos, Nigeria</p>
                                        </div>
                                    </div>
                                    <p className="sm:text-base text-xs font-bold text-purple-600 border-b">500,000 Naira</p>
                                    <div className="mt-3 flex flex-row space-x-4 items-center">
                                      <div className="flex-row flex items-center space-x-2">
                                        <img src={bed} alt="bed-icon" className="w-6 h-6 mr-2 ml-4" />
                                        <p className="sm:text-base text-xs font-bold">2 bedrooms</p>
                                      </div>
                                      <div className="flex-row flex items-center space-x-2 border-l">
                                        <img src={bath} alt="bath-icon" className="w-6 h-6 mr-2 ml-4" />
                                        <p className="sm:text-base text-xs font-bold">2 bathrooms</p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                      </div>
                    </div>
                </div>
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoard;