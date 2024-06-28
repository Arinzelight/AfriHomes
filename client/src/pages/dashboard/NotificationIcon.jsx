import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const NotificationIcon = () => {
    return (
        <div className="notification-icon">
            <FontAwesomeIcon icon={faBell} className="h-6 w-6 text-black-700" />
        </div>
    );
};

export default NotificationIcon;