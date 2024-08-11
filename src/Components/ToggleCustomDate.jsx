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
    <div className="flex items-center mb-2 space-x-4">
      <label className="flex flex-col text-xs text-gray-700">
        <span className="mb-1 font-bold">Start Date:</span>
        <input
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-28"
        />
      </label>
      <label className="flex flex-col text-xs text-gray-700">
        <span className="mb-1 font-bold">End Date:</span>
        <input
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-28"
        />
      </label>
      <button
        onClick={handleSearchClick}
        className="bg-black text-white font-medium px-4 py-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default ToggleCustomDate;
