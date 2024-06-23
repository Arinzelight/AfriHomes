import React from "react";
import '../styles/AboutUs.css';
import logo from '../images/afrihome_logo.png';

const AboutUs = () => {
    return (
        <div className="flex flex-col about-us">
            {/* First row: About Us header */}
            <div className="flex justify-center items-center h-1/3 text-about">
                <h1 className="text-4xl font-bold text-center">About Us</h1>
            </div>
            {/* Second row: two columns */}
            <div className="flex flex-grow logoContainer">
                {/* First column: Logo */}
                <div className="flex justify-center items-center w-1/2 logo-about">
                    <img src={logo} alt="AfriHomes Logo" className="h-48 w-48 object-cover" />
                </div>
                {/* Second column: Text and button */}
                <div className="flex flex-col justify-center items-center w-1/2 p-8 about">
                    <p className="mb-4 text-lg">We recognize the pain of using a renting platform with no location attached. 
                    We have therefore decided to add a map feature tailored to ensure your safety as 
                    you hunt your next space you will call home.</p>
                    <button className="text-white font-bold joinAbout-btn">Join / Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;