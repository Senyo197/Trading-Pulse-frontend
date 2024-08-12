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
    <div className="mb-4">
      <label className="font-medium text-gray-700">
        Select Period:
        <select
          value={selectedPeriod}
          onChange={handleSelectChange}
          className="ml-2 border border-gray-300 rounded-md px-3 py-2"
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
