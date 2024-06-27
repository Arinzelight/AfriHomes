import React from "react";
import logo from '../../images/afrihome_logo.png';

const AboutUs = () => {
    return (
        <div className="">
            {/* First row: About Us header */}
            <div className="my-10">
                <h1 className="text-4xl font-bold text-center">About Us</h1>
            </div>
            {/* Second row: two columns */}
            <div className="flex px-4 gap-[4rem] sm:flex-row flex-col sm:justify-center justify-between sm:items-center items-center">
                {/* First column: Logo */}
                <div className="h-60 w-80">
                    <img src={logo} alt="AfriHomes Logo" className="h-60 w-60 object-contain" />
                </div>
                {/* Second column: Text and button */}
                <div className="sm:bottom-[200px] bottom-2">
                    <p className="mb-4 my-[-20px] text-lg">We recognize the pain of using a renting platform with no location attached. 
                    We have therefore decided to add a map feature tailored to ensure your safety as 
                    you hunt your next space you will call home.</p>
                    <div className="grid justify-items-center mb-8">
                        <button className=" text-white font-bold bg-purple-600 py-2 px-4 rounded-lg">Join / Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;