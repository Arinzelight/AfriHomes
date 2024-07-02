import React from "react";
import SearchIcon from "../../components/SearchIcon";
import landing12 from "../../images/LandingPage/landing_12.jpg";
import landing8 from "../../images/LandingPage/landing_8.jpg";
import landing9 from "../../images/LandingPage/landing_9.jpg";
import landing3 from "../../images/LandingPage/landing_3.jpg";

export default function DreamSpace() {
    return (
        <div className="flex flex-col lg:flex-row lg:h-screen p-8 mt-8">
            {/* First Column */}
            <div className="flex flex-col justify-center lg:mt-[-200px] items-center lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4">Make your dream space come alive</h2>
                    <p className="text-lg mb-4">Locate your dream environment with AfriHome. Search by Location, 
                        Houses, Rooms and Apartment for the length of stay you are looking for.
                    </p>
                </div>
                {/* Search Bar */}
                <div className="relative w-full lg:w-2/3">
                    <input
                        type="text"
                        placeholder="City, Location, Address, School, ZIP Code"
                        className="pl-10 py-2 w-full border rounded-lg"
                    />
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <SearchIcon color="gray" />
                    </div>
                </div>
            </div> 

            {/* Second Column */}
            <div className="flex flex-col md:flex-row w-full lg:w-1/2">
                {/* Second Column - First Column */}
                <div className="flex flex-col w-full lg:w-1/2 pr-2 mb-4 lg:mb-0">
                    <div className="w-full h-80 mb-4">
                        <img src={landing12} alt="landing_12" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-full h-80">
                        <img src={landing8} alt="landing_8" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>

                {/* Second Column - Second Column */}
                <div className="flex flex-col w-full lg:w-1/2 pl-2 lg:top-[80px]">
                    <div className="w-full h-80 mb-4">
                        <img src={landing3} alt="landing_3" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="w-full h-80">
                        <img src={landing9} alt="landing_9" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};