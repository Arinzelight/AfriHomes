import React from "react";
import recent1 from '../../images/LandingPage/landing_7.jpg';
import recent2 from '../../images/LandingPage/landing_8.jpg';
import recent3 from '../../images/LandingPage/landing_15.jpg';
import location from '../../images/icons/location_icon.png';
import bed from '../../images/icons/bed_icon.png';
import bath from '../../images/icons/bath_icon.png';

const RecentUploads = () => {
    return (
        <div className="lg:h-screen flex flex-col p-8 mt-8">
            
            {/* First row: Recent Uploads header */}
            <div className="flex flex-col items-start justify-center h-1/5 mb-8">
                <h1 className="text-4xl font-bold">Recent Uploads</h1>
                <p className="text-purple-600 cursor-pointer underline italic">Show more...</p>
            </div>

            {/* Second row: Recent Uploads images */}
            <div className="flex flex-col sm:flex-row gap-6">
                {/* First Item */}
                <div className="flex flex-col sm:w-1/3 w-full border rounded-lg">
                    <div className="w-full h-64 mb-4">
                        <img src={recent1} alt="recent1" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col p-2">
                        <p className="font-bold mb-2">Two bedroom apartment</p>
                        <div className="flex items-center mb-2">
                            <img src={location} alt="location-icon" className="w-6 h-6 mr-2" />
                            <p>Lagos, Nigeria</p>
                        </div>
                        <p className="mb-2">This is a newly built apartment complex located in Lagos</p>
                        <p className="font-bold text-purple-600 mb-4">250,000 Naira/month</p>
                        <div className="flex justify-between border-t pt-2 sm:mt-12">
                            <div className="flex items-center">
                                <img src={bed} alt="bed-icon" className="w-6 h-6 mr-2" />
                                <p className="font-bold">2 beds</p>
                            </div>
                            <div className="flex items-center border-l pl-2">
                                <img src={bath} alt="bath-icon" className="w-6 h-6 mr-2" />
                                <p className="font-bold">2 baths</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Item */}
                <div className="flex flex-col sm:w-1/3 w-full border rounded-lg">
                    <div className="w-full h-64 mb-4">
                        <img src={recent2} alt="recent2" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col p-2">
                        <p className="font-bold mb-2">Three bedroom house</p>
                        <div className="flex items-center mb-2">
                            <img src={location} alt="location-icon" className="w-6 h-6 mr-2" />
                            <p>Accra, Ghana</p>
                        </div>
                        <p className="mb-2">Located in the heart of the Airport residential area, this house offers the ...</p>
                        <p className="font-bold text-purple-600 mb-4">GHS 3500/month</p>
                        <div className="flex justify-between border-t pt-2 sm:mt-12">
                            <div className="flex items-center">
                                <img src={bed} alt="bed-icon" className="w-6 h-6 mr-2" />
                                <p className="font-bold">3 beds</p>
                            </div>
                            <div className="flex items-center border-l pl-2">
                                <img src={bath} alt="bath-icon" className="w-6 h-6 mr-2" />
                                <p className="font-bold">2 baths</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Item */}
                <div className="flex flex-col sm:w-1/3 w-full border rounded-lg">
                    <div className="w-full h-64 mb-4">
                        <img src={recent3} alt="recent3" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="flex flex-col p-2">
                        <p className="font-bold mb-2">A Studio Apartment</p>
                        <div className="flex items-center mb-2">
                            <img src={location} alt="location-icon" className="w-6 h-6 mr-2" />
                            <p>Abuja, Nigeria</p>
                        </div>
                        <p className="mb-2">This is a newly built apartment complex located in Abuja. Abuja has been known for its culture and heritage, staying here will present you...</p>
                        <p className="font-bold text-purple-600 mb-4">100,000 Naira/month</p>
                        <div className="flex justify-between border-t pt-2 sm:mb-1">
                            <div className="flex items-center">
                                <img src={bed} alt="bed-icon" className="w-6 h-6 mr-2" />
                                <p className="font-bold">1 bed</p>
                            </div>
                            <div className="flex items-center border-l pl-2">
                                <img src={bath} alt="bath-icon" className="w-6 h-6 mr-2" />
                                <p className="font-bold">1 bath</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentUploads;