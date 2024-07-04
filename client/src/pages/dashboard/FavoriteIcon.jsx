import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FavoriteIcon = () => {
    return (
        <div className="favorite-icon">
            <FontAwesomeIcon icon={faHeart} className="h-6 w-6 text-black-700" />
        </div>
    );
};

export default FavoriteIcon;