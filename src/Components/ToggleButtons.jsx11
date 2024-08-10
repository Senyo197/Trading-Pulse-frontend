import React, { useState } from "react";
import ToggleLastWeek from "./ToggleLastWeek";
import ToggleThisMonth from "./ToggleThisMonth";
import ToggleLastMonth from "./ToggleLastMonth";
import ToggleThisYear from "./ToggleThisYear";
import ToggleLastYear from "./ToggleLastYear";

const ToggleButtons = ({ handleSearch }) => {
  const [activeOption, setActiveOption] = useState("");

  const handleSelectChange = (event) => {
    setActiveOption(event.target.value);
  };

  return (
    <div className="mb-4">
      <select
        value={activeOption}
        onChange={handleSelectChange}
        className="bg-black text-white p-2 rounded-md"
      >
        <option value="" disabled>
          Select Time Range
        </option>
        <option value="lastWeek">Last Week</option>
        <option value="thisMonth">This Month</option>
        <option value="lastMonth">Last Month</option>
        <option value="thisYear">This Year</option>
        <option value="lastYear">Last Year</option>
      </select>
      {activeOption === "lastWeek" && (
        <ToggleLastWeek handleSearch={handleSearch} />
      )}
      {activeOption === "thisMonth" && (
        <ToggleThisMonth handleSearch={handleSearch} />
      )}
      {activeOption === "lastMonth" && (
        <ToggleLastMonth handleSearch={handleSearch} />
      )}
      {activeOption === "thisYear" && (
        <ToggleThisYear handleSearch={handleSearch} />
      )}
      {activeOption === "lastYear" && (
        <ToggleLastYear handleSearch={handleSearch} />
      )}
    </div>
  );
};

export default ToggleButtons;
