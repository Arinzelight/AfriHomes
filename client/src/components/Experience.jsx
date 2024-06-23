import React from "react";
import '../styles/Experience.css';
import avatar from '../images/icons/avatar_icon.png';
import locationShield from '../images/icons/locationShield_icon.png';
import searchIcon from '../images/icons/search_icon.png';
import commentIcon from '../images/icons/comment_icon.png';

const Experience = () => {
    return (
        <div className="flex flex-col experience">
            {/* First row: Experience */}
            <div className="flex justify-center items-center h-1/4 text-experience">
                <h1 className="text-4xl font-bold text-center">The AfriHomes Experience</h1>
            </div>

            {/* Second row: two columns */}
            <div className="flex flex-grow second-row">
                <div className="flex w-1/2 p-4 left-side-1">
                    <div className="w-1/5 left-icon-1">
                        <img src={avatar} alt="avatar-icon" />
                    </div>
                    <div className="w-4/5 pl-4 text-1">
                        <h3 className="h3">User Registration</h3>
                        <p className="p">You can securely register with us by registering with an email or 
                            by using google authentication. A smooth experience in 
                            signing up with us as a tenant, landlord or agent.</p>
                    </div>
                </div>

                <div className="flex w-1/2 right-side-1">
                    <div className="w-1/5 right-icon-1">
                        <img src={locationShield} alt="locationShield-icon" />
                    </div>
                    <div className="w-4/5 text-1">
                        <h3 className="h3">View Property on Google Maps</h3>
                        <p className="p">As a safety feature, seamlessly access the location of 
                        a property interest on google maps for better direction and familiarity.</p>
                    </div>
                </div>
            </div>

            {/* Third row: two columns */}
            <div className="flex third-row">
                <div className="flex w-1/2 p-4 left-side-2">
                    <div className="w-1/5 left-icon-2">
                        <img src={searchIcon} alt="search-icon" />
                    </div>
                    <div className="w-4/5 text-2">
                        <h3 className="h3">Search Optimized</h3>
                        <p className="p">Search by location or by interest that fit the criteria of your new home.</p>
                    </div>
                </div>

                <div className="flex w-1/2 right-side-2">
                    <div className="w-1/5 right-icon-2">
                        <img src={commentIcon} alt="comment-icon" />
                    </div>
                    <div className="w-4/5 text-2">
                        <h3 className="h3">Comment and Chat with Property Owners or Agents</h3>
                        <p className="p">Conveniently connect with property owners or agents as well as other tenants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Experience;