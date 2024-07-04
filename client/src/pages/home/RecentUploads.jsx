import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation
import DOMPurify from "dompurify"; // Import DOMPurify for sanitizing HTML
import location from "../../assets/icons/location_icon.png";
import bed from "../../assets/icons/bed_icon.png";
import bath from "../../assets/icons/bath_icon.png";

// Function to truncate text to a specific word limit
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};

const RecentUploads = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get("/api/listing");
        if (response.data && Array.isArray(response.data.docs)) {
          setListings(response.data.docs);
        } else {
          console.error(
            "Fetched data does not contain an array in docs:",
            response.data
          );
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="flex flex-col p-8 mt-8">
      {/* First row: Recent Uploads header */}
      <div className="flex flex-col items-start justify-center h-1/5 mb-8">
        <h1 className="text-4xl font-bold">Recent Uploads</h1>
        <p className="text-purple-600 cursor-pointer underline italic">
          Show more...
        </p>
      </div>

      {/* Second row: Recent Uploads images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <Link
              key={listing._id}
              to={`/single-page/${listing._id}`} // Redirect to single page with listing ID
              className="flex flex-col border rounded-lg"
            >
              <div className="w-full h-64 mb-4">
                <img
                  src={listing.imageUrls[0]} // Assuming the first image in the array
                  alt={listing.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col p-2">
                <p className="font-bold mb-2">
                  {truncateText(listing.title, 9)}
                </p>
                <div className="flex items-center mb-2">
                  <img
                    src={location}
                    alt="location-icon"
                    className="w-6 h-6 mr-2"
                  />
                  <p>
                    {listing.city}, {listing.country}
                  </p>
                </div>
                <div
                  className="mb-2"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      truncateText(listing.description, 25)
                    ),
                  }}
                />
                <p className="font-bold text-purple-600 mb-4">
                  ${listing.price}
                </p>
                <div className="flex justify-between border-t pt-2 sm:mt-12">
                  <div className="flex items-center">
                    <img src={bed} alt="bed-icon" className="w-6 h-6 mr-2" />
                    <p className="font-bold">{listing.bedrooms} beds</p>
                  </div>
                  <div className="flex items-center border-l pl-2">
                    <img src={bath} alt="bath-icon" className="w-6 h-6 mr-2" />
                    <p className="font-bold">{listing.bathrooms} baths</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No recent uploads available.</p>
        )}
      </div>
    </div>
  );
};

export default RecentUploads;
