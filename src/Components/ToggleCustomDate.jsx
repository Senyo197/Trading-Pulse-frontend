import React, { useState } from "react";
import { useSearch } from "./SearchContext";

const ToggleCustomDate = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const { handleSearch } = useSearch();

  const handleStartDateChange = (e) => setStartDate(e.target.value);
  const handleEndDateChange = (e) => setEndDate(e.target.value);

  const handleSearchClick = () => {
    handleSearch(startDate, endDate);
  };

  return (
    <div className="flex items-center mb-2 md:mb-4 md:space-x-4 space-x-2 p-2 md:p-4 bg-white rounded-lg shadow-sm border border-gray-300">
      <label className="flex flex-col text-sm text-gray-800">
        <span className="mb-1">Start Date:</span>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="border border-gray-400 text-xs rounded-md px-2 py-2 bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </label>
      <label className="flex flex-col text-sm text-gray-800">
        <span className="mb-1">End Date:</span>
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="border border-gray-400 text-xs rounded-md px-2 py-2 bg-gray-50 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </label>
      <button
        onClick={handleSearchClick}
        className="bg-blue-600 text-white text-xs px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Search
      </button>
    </div>
  );
};

export default ToggleCustomDate;
