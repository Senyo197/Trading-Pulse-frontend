import React, { useState } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import ToggleLastWeek from "./ToggleLastWeek";
import ToggleThisMonth from "./ToggleThisMonth";
import ToggleLastMonth from "./ToggleLastMonth";
import ToggleThisYear from "./ToggleThisYear";
import ToggleLastYear from "./ToggleLastYear";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 10,
    "& .MuiTooltip-arrow": {
      color: "black",
    },
  },
}));

const ToggleButtons = () => {
  const [activeButton, setActiveButton] = useState("");

  const handleSetActive = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleSearch = (startDate, endDate) => {
    console.log(`Searching from ${startDate} to ${endDate}`);
    // Add your fetch or search logic here
  };

  const buttonStyles = (buttonName) =>
    ` ${
      activeButton === buttonName
        ? "text-black bg-white"
        : "text-white bg-black"
    } hover:bg-white hover:text-black px-3 text-xs rounded-md`;

  return (
    <div className="flex mb-20 space-x-2">
      <LightTooltip title="Last Week" arrow placement="bottom">
        <div
          className={buttonStyles("lastWeek")}
          onClick={() => {
            handleSetActive("lastWeek");
          }}
        >
          <ToggleLastWeek handleSearch={handleSearch} />
        </div>
      </LightTooltip>
      <LightTooltip title="This Month" arrow placement="bottom">
        <div
          className={buttonStyles("thisMonth")}
          onClick={() => {
            handleSetActive("thisMonth");
          }}
        >
          <ToggleThisMonth handleSearch={handleSearch} />
        </div>
      </LightTooltip>
      <LightTooltip title="Last Month" arrow placement="bottom">
        <div
          className={buttonStyles("lastMonth")}
          onClick={() => {
            handleSetActive("lastMonth");
          }}
        >
          <ToggleLastMonth handleSearch={handleSearch} />
        </div>
      </LightTooltip>
      <LightTooltip title="This Year" arrow placement="bottom">
        <div
          className={buttonStyles("thisYear")}
          onClick={() => {
            handleSetActive("thisYear");
          }}
        >
          <ToggleThisYear handleSearch={handleSearch} />
        </div>
      </LightTooltip>
      <LightTooltip title="Last Year" arrow placement="bottom">
        <div
          className={buttonStyles("lastYear")}
          onClick={() => {
            handleSetActive("lastYear");
          }}
        >
          <ToggleLastYear handleSearch={handleSearch} />
        </div>
      </LightTooltip>
    </div>
  );
};

export default ToggleButtons;
