import React, { useState, useEffect } from "react";
import search from "../assets/images/search.png";

function Filter({ filters: initialFilters, onFilterChange }) {
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting filters:", filters); // Debugging log
    onFilterChange(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h1 className="font-light text-2xl">
        Search results for <b>{filters.location}</b>
      </h1>
      <div>
        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-xs">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="City Location"
            value={filters.location}
            onChange={handleChange}
            className="border border-gray-300 h-10 rounded-sm px-3"
          />
        </div>
      </div>
      <div className="flex justify-between gap-5 flex-wrap">
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-xs">
            Type
          </label>
          <select
            name="category"
            id="category"
            value={filters.category}
            onChange={handleChange}
            className="w-24 p-4 text-xs border border-gray-300 rounded-sm"
          >
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="property" className="text-xs">
            Property
          </label>
          <select
            name="property"
            id="property"
            value={filters.property}
            onChange={handleChange}
            className="w-24 p-4 text-xs border border-gray-300 rounded-sm"
          >
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="minPrice" className="text-xs">
            Min Price
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            className="w-24 p-3 border border-gray-300 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="maxPrice" className="text-xs">
            Max Price
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            className="w-24 p-3 border border-gray-300 rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bedroom" className="text-xs">
            Bedroom
          </label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            value={filters.bedroom}
            onChange={handleChange}
            className="w-24 p-3 border border-gray-300 rounded-sm"
          />
        </div>
        <button
          type="submit"
          className="py-3 px-6 border-none cursor-pointer bg-orange-500 rounded-sm"
        >
          <img src={search} alt="search" className="w-6 h-6" />
        </button>
      </div>
    </form>
  );
}

export default Filter;
