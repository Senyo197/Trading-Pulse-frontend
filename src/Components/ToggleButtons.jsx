import React, { useState, useEffect } from "react";
import ToggleLastWeek from "./ToggleLastWeek";
import ToggleThisMonth from "./ToggleThisMonth";
import ToggleLastMonth from "./ToggleLastMonth";
import ToggleThisYear from "./ToggleThisYear";
import ToggleLastYear from "./ToggleLastYear";

const ToggleButtons = ({ handleSearch, setLoading }) => {
  const [activeOption, setActiveOption] = useState("");

  const handleSelectChange = (event) => {
    setActiveOption(event.target.value);
  };

  useEffect(() => {
    if (activeOption) {
      setLoading(true);
      console.log(`Fetching data for: ${activeOption}`);
      handleSearch(activeOption)
        .then(() => setLoading(false))
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }
  }, [activeOption, handleSearch, setLoading]);

  const renderToggleComponent = () => {
    switch (activeOption) {
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
      {renderToggleComponent()}
    </div>
  );
};

export default ToggleButtons;
