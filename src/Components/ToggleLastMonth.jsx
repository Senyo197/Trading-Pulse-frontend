import React, { useEffect } from "react";

const ToggleLastMonth = ({ handleSearch }) => {
  useEffect(() => {
    const currentDate = new Date();
    const lastMonthStartDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    )
      .toISOString()
      .split("T")[0];
    const lastMonthEndDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    )
      .toISOString()
      .split("T")[0];
    handleSearch(lastMonthStartDate, lastMonthEndDate);
  }, [handleSearch]);

  return null;
};

export default ToggleLastMonth;
