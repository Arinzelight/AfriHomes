import React from "react";
import avatarImage from "../../assets/images/Dashboard/avatar-01.jpg"; // Ensure you have an avatar image in your images folder

const AvatarIcon = () => {
    return (
        <div className="avatar">
            <img
                src={avatarImage}
                alt="User Avatar"
                className="h-10 w-10 rounded-full object-cover"
            />
        </div>
    );
};

export default AvatarIcon;