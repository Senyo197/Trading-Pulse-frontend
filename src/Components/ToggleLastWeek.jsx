import React, { useEffect } from "react";

const ToggleLastWeek = ({ handleSearch }) => {
  useEffect(() => {
    const currentDate = new Date();
    const lastWeekStartDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - currentDate.getDay() - 6
    )
      .toISOString()
      .split("T")[0];
    const lastWeekEndDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - currentDate.getDay()
    )
      .toISOString()
      .split("T")[0];
    handleSearch(lastWeekStartDate, lastWeekEndDate);
  }, [handleSearch]);

  return null;
};

export default ToggleLastWeek;
