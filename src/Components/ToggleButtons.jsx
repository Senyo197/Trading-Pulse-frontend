import React, { useState } from "react";
import { useSearch } from "./SearchContext";

const ToggleSelect = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const { handleSearch } = useSearch();

  const handleSelectChange = (e) => {
    const period = e.target.value;
    setSelectedPeriod(period);
    // Define date ranges for different periods
    const dateRanges = {
      all: ["", ""],
      lastWeek: [
        new Date(new Date().setDate(new Date().getDate() - 7))
          .toISOString()
          .split("T")[0],
        new Date().toISOString().split("T")[0],
      ],
      thisMonth: [
        new Date(new Date().getFullYear(), new Date().getMonth(), 1)
          .toISOString()
          .split("T")[0],
        new Date().toISOString().split("T")[0],
      ],
      lastMonth: [
        new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1)
          .toISOString()
          .split("T")[0],
        new Date(new Date().getFullYear(), new Date().getMonth(), 0)
          .toISOString()
          .split("T")[0],
      ],
      thisYear: [
        new Date(new Date().getFullYear(), 0, 1).toISOString().split("T")[0],
        new Date().toISOString().split("T")[0],
      ],
      lastYear: [
        new Date(new Date().getFullYear() - 1, 0, 1)
          .toISOString()
          .split("T")[0],
        new Date(new Date().getFullYear() - 1, 11, 31)
          .toISOString()
          .split("T")[0],
      ],
    };

    const [startDate, endDate] = dateRanges[period];
    handleSearch(startDate, endDate);
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
    </div>
  );
};

export default ToggleSelect;
