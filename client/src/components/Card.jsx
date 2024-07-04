import React from "react";
import { Link } from "react-router-dom";
import bed from "../assets/images/bed.png";
import bath from "../assets/images/bath.png";
import pin from "../assets/images/pin.png";
import save from "../assets/images/save.png";
import chat from "../assets/images/chat.png";

// Function to truncate text to a specific word limit
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

export default function Card({ item }) {
  return (
    <div className="flex gap-5 lg:flex-row flex-col">
      <Link to={`/single-page/${item.id}`} className="flex h-52">
        <img
          src={item.imageUrls[0]}
          alt=""
          className="w-full h-full rounded object-cover"
        />
      </Link>
      <div className="flex flex-col gap-3 justify-between ">
        <h2>
          <Link
            to={`/single-page/${item.id}`}
            className="text-xl font-semibold transition text-gray-600 hover:text-black hover:scale-100"
          >
            {truncateText(item.title, 6)} {/* Displaying 6 words */}
          </Link>
        </h2>
        <p className="flex items-center">
          <img src={pin} alt="location" className="w-4 h-4" />
          <span className="text-sm flex items-center text-gray-500 gap-1 ml-1 w-max">
            {truncateText(item.location, 4)} {/* Displaying 4 words */}
          </span>
        </p>
        <p className="text-xl font-light p-2 rounded">$ {item.price}</p>
        <div className="flex justify-between gap-3">
          <div className="flex gap-2 md:gap-3 text-xs">
            <div className="flex gap-1 p-1 bg-slate-100 rounded items-center">
              <img src={bed} alt="bedroom" className="w-4 h-4" />
              <span> {item.bedrooms} bedroom</span>
            </div>
            <div className="flex gap-1 p-1 bg-slate-100 rounded items-center">
              <img src={bath} alt="bathroom" className="w-4 h-4" />
              <span>{item.bathrooms} bathroom</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="rounded-sm p-1 bg-slate-50 cursor-pointer flex items-center">
              <img src={save} alt="" className="w-4 h-4" />
            </div>
            <div className="rounded-sm p-1 bg-slate-50 cursor-pointer flex items-center hover:text-gray-600">
              <img src={chat} alt="" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
