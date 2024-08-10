import React, { useState } from "react";

const ToggleCustomDate = ({ handleSearch }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(startDate, endDate);
  };

  return (
    <div className="flex items-center mb-4 space-x-4">
      <label className="flex flex-col text-sm text-gray-700">
        <span className="mb-1 font-bold">Start Date:</span>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>
      <label className="flex flex-col text-sm text-gray-700">
        <span className="mb-1 font-bold">End Date:</span>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
