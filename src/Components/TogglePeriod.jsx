import { useEffect } from "react";

const TogglePeriod = ({ period, handleSearch }) => {
  useEffect(() => {
    const currentDate = new Date();
    let startDate, endDate;

    switch (period) {
      case "lastWeek":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - currentDate.getDay() - 6
        )
          .toISOString()
          .split("T")[0];
        endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - currentDate.getDay()
        )
          .toISOString()
          .split("T")[0];
        break;

      case "thisMonth":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1
        )
          .toISOString()
          .split("T")[0];
        endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0
        )
          .toISOString()
          .split("T")[0];
        break;

      case "lastMonth":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          1
        )
          .toISOString()
          .split("T")[0];
        endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)
          .toISOString()
          .split("T")[0];
        break;

      case "thisYear":
        startDate = new Date(currentDate.getFullYear(), 0, 1)
          .toISOString()
          .split("T")[0];
        endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        )
          .toISOString()
          .split("T")[0];
        break;

      case "lastYear":
        startDate = new Date(currentDate.getFullYear() - 1, 0, 1)
          .toISOString()
          .split("T")[0];
        endDate = new Date(currentDate.getFullYear() - 1, 11, 31)
          .toISOString()
          .split("T")[0];
        break;

      default:
        startDate = "";
        endDate = "";
    }

    handleSearch(startDate, endDate);
  }, [period, handleSearch]);

  return null;
};

export default TogglePeriod;
