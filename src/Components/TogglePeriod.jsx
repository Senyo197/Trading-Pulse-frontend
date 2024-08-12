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
        ).toISOString();
        endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate() - currentDate.getDay()
        ).toISOString();
        break;

      case "thisMonth":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          1
        ).toISOString();
        endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0
        ).toISOString();
        break;

      case "lastMonth":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          1
        ).toISOString();
        endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).toISOString();
        break;

      case "thisYear":
        startDate = new Date(currentDate.getFullYear(), 0, 1).toISOString();
        endDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate()
        ).toISOString();
        break;

      case "lastYear":
        startDate = new Date(currentDate.getFullYear() - 1, 0, 1).toISOString();
        endDate = new Date(currentDate.getFullYear() - 1, 11, 31).toISOString();
        break;

      case "all":
        startDate = "";
        endDate = currentDate.toISOString();
        break;

      default:
        startDate = "";
        endDate = "";
    }

    console.log(
      `Period: ${period}, Start Date: ${startDate.split("T")[0]}, End Date: ${
        endDate.split("T")[0]
      }`
    );
    handleSearch(startDate.split("T")[0], endDate.split("T")[0]);
  }, [period, handleSearch]);

  return null;
};

export default TogglePeriod;
