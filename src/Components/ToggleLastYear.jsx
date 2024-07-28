import React, { useEffect } from "react";

const ToggleLastYear = ({ handleSearch }) => {
  useEffect(() => {
    const currentDate = new Date();
    const lastYearStartDate = new Date(currentDate.getFullYear() - 1, 0, 1)
      .toISOString()
      .split("T")[0];
    const lastYearEndDate = new Date(currentDate.getFullYear() - 1, 11, 31)
      .toISOString()
      .split("T")[0];
    handleSearch(lastYearStartDate, lastYearEndDate);
  }, [handleSearch]);

  return null;
};

export default ToggleLastYear;
