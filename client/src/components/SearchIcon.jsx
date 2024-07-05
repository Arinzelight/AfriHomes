// The search icon
import React from "react";

const SearchIcon = ({ color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={color}
    className="sm:w-4 sm:h-4 w-2 h-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M9.75 17.25A7.5 7.5 0 1 0 9.75 2.25a7.5 7.5 0 0 0 0 15z"
    />
  </svg>
);

export default SearchIcon;
