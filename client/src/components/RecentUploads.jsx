import React from "react";
import '../styles/RecentUploads.css';
import recent1 from '../images/LandingPage/landing_7.jpg';
import recent2 from '../images/LandingPage/landing_8.jpg';
import recent3 from '../images/LandingPage/landing_15.jpg';
import location from '../images/icons/location_icon.png';
import bed from '../images/icons/bed_icon.png';
import bath from '../images/icons/bath_icon.png';

const RecentUploads = () => {
    return (
        <div className="h-screen flex flex-col recentUploads">
            
            {/* First row: Recent Uploads header */}
            <div className="flex flex-grow justify-start items-start flex-col h-1/5 text-recent">
                <h1 className="text-4xl font-bold text-center">Recent Uploads</h1>
                <p className="show-more">Show more...</p>
            </div>

            {/* Second row: Recent Uploads images */}
            <div className="flex flex-grow flex-row gap-4 recent-spaces">
                <div className="w-1/3 recent-spaces-1">
                    <div className="w-2/3 image-container-1">
                        <img src={recent1} alt="recent1" className="object-cover" />
                    </div>
                    <div className="text-container-1">
                        <p className="text-bold p-1">Two bedroom apartment</p>
                        <div className="flex flex-row">
                            <div className="w-1/4 width=10 height=10 location-icon">
                                <img src={location} alt="location-icon" />
                            </div>
                            <div className="w-3/4">
                                <p className="p-2">Lagos, Nigeria</p>
                            </div>
                        </div>
                        <p className="p-3">This is a newly built apartment complex located in Lagos</p>
                        <p className="text-bold p-4">250,000 Naira/month</p>
                        <div className="flex flex-row amen-1">
                            <div className="flex flex-row w-1/2 p-5">
                                <div className="w-1/4 width=10 height=10 bed-icon">
                                    <img src={bed} alt="bed-icon" />
                                </div>
                                <div>
                                    <p className="text-bold">2 beds</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-1/2 p-6">
                                <div className="w-1/4 width=10 height=10 bath-icon">
                                    <img src={bath} alt="bath-icon" />
                                </div>
                                <div>
                                    <p className="text-bold">2 baths</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 recent-spaces-1">
                <div className="w-2/3 image-container-1">
                        <img src={recent2} alt="recent1" className="object-cover" />
                    </div>
                    <div className="text-container-1">
                        <p className="text-bold p-1">Three bedroom house</p>
                        <div className="flex flex-row">
                            <div className="w-1/4 width=10 height=10 location-icon">
                                <img src={location} alt="location-icon" />
                            </div>
                            <div className="w-3/4">
                                <p className="p-2">Accra, Ghana</p>
                            </div>
                        </div>
                        <p className="p-3">Located in the heart of the Airport residential area, this house offers the ...</p>
                        <p className="text-bold p-4">GHS 3500/month</p>
                        <div className="flex flex-row amen-1">
                            <div className="flex flex-row w-1/2 p-5">
                                <div className="w-1/4 width=10 height=10 bed-icon">
                                    <img src={bed} alt="bed-icon" />
                                </div>
                                <div>
                                    <p className="text-bold">3 beds</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-1/2 p-6">
                                <div className="w-1/4 width=10 height=10 bath-icon">
                                    <img src={bath} alt="bath-icon" />
                                </div>
                                <div>
                                    <p className="text-bold">2 baths</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 recent-spaces-1">
                <div className="w-2/3 image-container-1">
                        <img src={recent3} alt="recent1" className="object-cover" />
                    </div>
                    <div className="text-container-1">
                        <p className="text-bold p-1">A Studio Apartment</p>
                        <div className="flex flex-row">
                            <div className="w-1/4 width=10 height=10 location-icon">
                                <img src={location} alt="location-icon" />
                            </div>
                            <div className="w-3/4">
                                <p className="p-2">Abuja, Nigeria</p>
                            </div>
                        </div>
                        <p className="p-3">This is a newly built apartment complex located in Abuja.
                            Abuja has been known for its culture and heritage, staying here will present you...</p>
                        <p className="text-bold p-4">100,000 Naira/month</p>
                        <div className="flex flex-row amen-1">
                            <div className="flex flex-row w-1/2 p-5">
                                <div className="w-1/4 width=10 height=10 bed-icon">
                                    <img src={bed} alt="bed-icon" />
                                </div>
                                <div>
                                    <p className="text-bold">1 beds</p>
                                </div>
                            </div>
                            <div className="flex flex-row w-1/2 p-6">
                                <div className="w-1/4 width=10 height=10 bath-icon">
                                    <img src={bath} alt="bath-icon" />
                                </div>
                                <div>
                                    <p className="text-bold">1 baths</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentUploads;