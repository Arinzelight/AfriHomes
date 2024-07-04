import React, { useState, useEffect } from "react";
import axios from "axios";
import location from '../../images/icons/location_icon.png';
import bed from '../../images/icons/bed_icon.png';
import bath from '../../images/icons/bath_icon.png';

const RecentUploads = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get('/api/listing');
                console.log(response.data);
                const listingsData = Array.isArray(response.data) ? response.data.slice(0, 3) : [];
                setListings(listingsData);
            } catch (error) {
                console.error('Error fetching listings:', error);
                setListings([]);
            }
        };
        fetchListings();
    }, []);

    return (
        <div className="lg:h-screen flex flex-col p-8 mt-8">
            {/* First row: Recent Uploads header */}
            <div className="flex flex-col items-start justify-center h-1/5 mb-8">
                <h1 className="text-4xl font-bold">Recent Uploads</h1>
                <p className="text-purple-600 cursor-pointer underline italic">Show more...</p>
            </div>

            {/* Second row: Recent Uploads images */}
            <div className="flex flex-col sm:flex-row gap-6">
                {listings.map((listing) => (
                    <div key={listing.id} className="flex flex-col sm:w-1/3 w-full border rounded-lg">
                        <div className="w-full h-64 mb-4">
                            <img src={listing.img} alt={listing.title} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex flex-col p-2">
                            <p className="font-bold mb-2">{listing.title}</p>
                            <div className="flex items-center mb-2">
                                <img src={location} alt="location-icon" className="w-6 h-6 mr-2" />
                                <p>{listing.address || "No address provided"}</p>
                            </div>
                            <p className="mb-2">{listing.description || "No description available"}</p>
                            <p className="font-bold text-purple-600 mb-4">{listing.price}</p>
                            <div className="flex justify-between border-t pt-2 sm:mt-12">
                                <div className="flex items-center">
                                    <img src={bed} alt="bed-icon" className="w-6 h-6 mr-2" />
                                    <p className="font-bold">{listing.bedRooms} beds</p>
                                </div>
                                <div className="flex items-center border-l pl-2">
                                    <img src={bath} alt="bath-icon" className="w-6 h-6 mr-2" />
                                    <p className="font-bold">{listing.bathRooms} baths</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentUploads;