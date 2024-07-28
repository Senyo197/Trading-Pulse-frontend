import React, { useEffect } from "react";

const ToggleThisYear = ({ handleSearch }) => {
  useEffect(() => {
    const currentDate = new Date();
    const thisYearStartDate = new Date(currentDate.getFullYear(), 0, 1)
      .toISOString()
      .split("T")[0];
    const thisYearEndDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
    )
      .toISOString()
      .split("T")[0];
    handleSearch(thisYearStartDate, thisYearEndDate);
  }, [handleSearch]);

  return null;
};

export default ToggleThisYear;
