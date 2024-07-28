import React, { useEffect } from "react";

const ToggleThisMonth = ({ handleSearch }) => {
  useEffect(() => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    )
      .toISOString()
      .split("T")[0];
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    )
      .toISOString()
      .split("T")[0];
    handleSearch(firstDayOfMonth, lastDayOfMonth);
  }, [handleSearch]);

  return null;
};

export default ToggleThisMonth;
