import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

function Search() {
  const [data, setData] = useState([]);
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

  const fetchData = async (page = 1) => {
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
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching listings:", error);
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

  return (
    <div className="flex flex-col lg:flex-row bg-white h-full md:px-10 px-2">
      <div className="w-full lg:w-1/2 p-4">
        <div className="pr-6 flex flex-col gap-12">
          <Filter filters={filters} onFilterChange={handleFilterChange} />
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
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-gray-50 h-64 md:h-auto pb-2">Map</div>
    </div>
  );
}

export default Search;
