import React from "react";
import "../styles/DreamSpace.css";
import SearchIcon from "./SearchIcon";
import landing12 from "../images/LandingPage/landing_12.jpg";
import landing8 from "../images/LandingPage/landing_8.jpg";
import landing9 from "../images/LandingPage/landing_9.jpg";
import landing3 from "../images/LandingPage/landing_3.jpg";

export default function DreamSpace() {
    return (
        <div className="flex flex-grow dreamspace">
            {/* First Column */}
            <div className="flex flex-col justify-center items-center w-1/2 dream-text">
                <h2 className="h2-1">Make your dream space come alive</h2>
                <p className="p2">Locate your dream environment with AfriHome. Search by Location, 
                    Houses, Rooms and Apartment for the length of stay you are looking for.
                </p>
                <div className="flex-grow mx-4 searchBar2">
                    <input type="text" placeholder="City, Location, Address, School, ZIP Code" className="search2" />
                    <div className="flex-grow absolute inset-y-0 left-3 flex items-center pointer-events-none searchIcon2">
                        <SearchIcon color="black" />
                    </div>
                </div>
            </div>

            {/* Second Column */}
            <div className="flex w-1/2 dream-images">

                {/* Second Column - First Column */}
                <div className="w-1/2 firstColumn">
                    <div className="image-container">
                        <img src={landing12} alt="landing_12" className="object-cover image-1" />
                    </div>
                    <div className="image-container mt-2">
                        <img src={landing8} alt="landing_8" className="object-cover image-2" />
                    </div>
                </div>

                {/* Second Column - Second Column */}
                <div className="w-1/2 secondColumn">
                    <div className="image-container">
                        <img src={landing3} alt="landing_3" className="object-cover image-3" />
                    </div>
                    <div className="image-container mt-2">
                        <img src={landing9} alt="landing_9" className="object-cover image-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};