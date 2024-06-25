import React from "react";
import avatar from '../../images/icons/avatar_icon.png';
import locationShield from '../../images/icons/locationShield_icon.png';
import searchIcon from '../../images/icons/search_icon.png';
import commentIcon from '../../images/icons/comment_icon.png';

const Experience = () => {
    return (
        <div className="flex flex-col mt-8">
            {/* First row: Experience */}
            <div className="flex p-4 justify-center items-center h-1/4 text-experience">
                <h1 className="text-4xl font-bold text-center">The AfriHomes Experience</h1>
            </div>

            {/* Second row: two columns */}
            <div className="flex flex-grow sm:flex-row flex-col">
                <div className="flex w-full md:w-1/2 p-4">
                    <div className="w-1/5 mx-4 md:h-10 md:w-10">
                        <img src={avatar} alt="avatar-icon" />
                    </div>
                    <div className="w-4/5 px-4">
                        <h3 className="font-bold">User Registration</h3>
                        <p className="p">You can securely register with us by registering with an email or 
                            by using google authentication. A smooth experience in 
                            signing up with us as a tenant, landlord or agent.</p>
                    </div>
                </div>

                <div className="flex w-full md:w-1/2 p-4">
                    <div className="w-1/5 mx-4 md:h-10 md:w-10">
                        <img src={locationShield} alt="locationShield-icon" />
                    </div>
                    <div className="w-4/5 px-4">
                        <h3 className="font-bold">View Property on Google Maps</h3>
                        <p className="p">As a safety feature, seamlessly access the location of 
                        a property interest on google maps for better direction and familiarity.</p>
                    </div>
                </div>
            </div>

            {/* Third row: two columns */}
            <div className="flex flex-grow sm:flex-row flex-col">
                <div className="flex w-full md:w-1/2 p-4">
                    <div className="w-1/5 mx-4 md:h-10 md:w-10">
                        <img src={searchIcon} alt="search-icon" />
                    </div>
                    <div className="w-4/5 text-2 px-4">
                        <h3 className="font-bold">Search Optimized</h3>
                        <p className="p">Search by location or by interest that fit the criteria of your new home.</p>
                    </div>
                </div>

                <div className="flex w-full md:w-1/2 p-4">
                    <div className="w-1/5 mx-4 md:h-10 md:w-10">
                        <img src={commentIcon} alt="comment-icon" />
                    </div>
                    <div className="w-4/5 px-4">
                        <h3 className="font-bold">Comment and Chat with Property Owners or Agents</h3>
                        <p className="p">Conveniently connect with property owners or agents as well as other tenants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Experience;