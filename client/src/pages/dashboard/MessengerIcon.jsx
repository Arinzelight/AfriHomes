import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MessengerIcon = () => {
    return (
        <div className="messenger-icon">
            <FontAwesomeIcon icon={faCommentDots} className="h-6 w-6 text-purple-700" />
        </div>
    );
};

export default MessengerIcon;