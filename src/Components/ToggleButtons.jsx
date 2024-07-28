import React, { useState } from "react";
import ToggleLastWeek from "./ToggleLastWeek";
import ToggleThisMonth from "./ToggleThisMonth";
import ToggleLastMonth from "./ToggleLastMonth";
import ToggleThisYear from "./ToggleThisYear";
import ToggleLastYear from "./ToggleLastYear";

const ToggleButtons = ({ handleSearch }) => {
  const [activeOption, setActiveOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setActiveOption(selectedOption);

    switch (selectedOption) {
      case "lastWeek":
        return <ToggleLastWeek handleSearch={handleSearch} />;
      case "thisMonth":
        return <ToggleThisMonth handleSearch={handleSearch} />;
      case "lastMonth":
        return <ToggleLastMonth handleSearch={handleSearch} />;
      case "thisYear":
        return <ToggleThisYear handleSearch={handleSearch} />;
      case "lastYear":
        return <ToggleLastYear handleSearch={handleSearch} />;
      default:
        return null;
    }
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
    </div>
  );
};

export default ToggleButtons;
