// Search.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import GoogleMapComponent from "../components/GoogleMap"; // Import the map component
import { css } from "@emotion/react"; // Import css function from emotion
import { ClipLoader } from "react-spinners"; // Import ClipLoader spinner

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Search() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]); // To store original data before filtering
  const [filters, setFilters] = useState({
    location: "",
    category: "sale",
    property: "apartment",
    minPrice: "",
    maxPrice: "",
    bedroom: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (page = 1) => {
    setLoading(true);
    try {
      const response = await axios.get("/api/listing/", {
        params: {
          location: filters.location,
          property: filters.property,
          minPrice: filters.minPrice,
          maxPrice: filters.maxPrice,
          bedroom: filters.bedroom,
          category: filters.category,
          page,
          limit: 10,
        },
      });
      console.log("Data fetched:", response.data); // Debugging log
      setData(response.data.docs);
      setOriginalData(response.data.docs); // Store original data
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching listings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [filters, currentPage]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const resetFilters = () => {
    setFilters({
      location: "",
      category: "sale",
      property: "apartment",
      minPrice: "",
      maxPrice: "",
      bedroom: "",
    });
    setOriginalData(data); // Reset to original data
  };

  const handleSearchReset = () => {
    resetFilters();
    fetchData(); // Refetch data without filters
  };

  // Default map center coordinates
  const defaultCenter = {
    lat: 10.8231, // Default latitude
    lng: 7.491302, // Default longitude
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white h-full md:px-10 px-2">
      <div className="w-full lg:w-1/2 p-4">
        <div className="pr-6 flex flex-col gap-12">
          <Filter filters={filters} onFilterChange={handleFilterChange} />
          {loading ? (
            <div className="flex justify-center">
              <ClipLoader
                color="#fcd34d"
                loading={loading}
                css={override}
                size={50}
              />
            </div>
          ) : (
            <>
              {data.length > 0 ? (
                data.map((item) => <Card key={item._id} item={item} />)
              ) : (
                <p>No results found.</p>
              )}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-gray-50 h-64 md:h-auto pb-2">
        <button
          onClick={handleSearchReset}
          className="py-3 px-6 border-none cursor-pointer bg-orange-500 rounded-sm"
        >
          Reset Filters
        </button>
        <GoogleMapComponent
          latitude={defaultCenter.lat}
          longitude={defaultCenter.lng}
        />
      </div>
    </div>
  );
}

export default Search;
