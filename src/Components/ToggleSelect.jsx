import React, { useState } from "react";
import { useSearch } from "./SearchContext";
import TogglePeriod from "./TogglePeriod";

const ToggleSelect = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const { handleSearch } = useSearch();

  const handleSelectChange = (e) => {
    setSelectedPeriod(e.target.value);
  };

  return (
    <div className="mb-2 md:mb-4 md:p-4 p-2 bg-white rounded-lg shadow-sm border border-gray-300">
      <label className="block text-lg font-serif text-gray-800">
        Select Period:
        <select
          value={selectedPeriod}
          onChange={handleSelectChange}
          className="ml-2 border border-gray-400 rounded-md px-4 py-2 text-gray-700 bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">All Time</option>
          <option value="lastWeek">Last Week</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
          <option value="thisYear">This Year</option>
          <option value="lastYear">Last Year</option>
        </select>
      </label>

      <TogglePeriod period={selectedPeriod} handleSearch={handleSearch} />
    </div>
  );
};

export default ToggleSelect;
