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
    fontSize: 11,
    "& .MuiTooltip-arrow": {
      color: "black",
    },
  },
}));

const ToggleButtons = ({ handleSearch }) => {
  const [activeButton, setActiveButton] = useState("");

  const handleSetActive = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonStyles = (buttonName) => 
    `transition duration-300 ease-in-out ${
      activeButton === buttonName ? "text-black bg-white" : "text-white bg-black"
    } hover:bg-white hover:text-black px-3 py-1 text-sm rounded-md`;

  return (
    <div className="flex mb-28 space-x-2">
      <LightTooltip title="Last Week" arrow placement="bottom">
        <button
          className={buttonStyles("lastWeek")}
          onClick={() => {
            handleSetActive("lastWeek");
            handleSearch();
          }}
        >
          Last Week
        </button>
      </LightTooltip>
      <LightTooltip title="This Month" arrow placement="bottom">
        <button
          className={buttonStyles("thisMonth")}
          onClick={() => {
            handleSetActive("thisMonth");
            handleSearch();
          }}
        >
          This Month
        </button>
      </LightTooltip>
      <LightTooltip title="Last Month" arrow placement="bottom">
        <button
          className={buttonStyles("lastMonth")}
          onClick={() => {
            handleSetActive("lastMonth");
            handleSearch();
          }}
        >
          Last Month
        </button>
      </LightTooltip>
      <LightTooltip title="This Year" arrow placement="bottom">
        <button
          className={buttonStyles("thisYear")}
          onClick={() => {
            handleSetActive("thisYear");
            handleSearch();
          }}
        >
          This Year
        </button>
      </LightTooltip>
      <LightTooltip title="Last Year" arrow placement="bottom">
        <button
          className={buttonStyles("lastYear")}
          onClick={() => {
            handleSetActive("lastYear");
            handleSearch();
          }}
        >
          Last Year
        </button>
      </LightTooltip>
    </div>
  );
};

export default ToggleButtons;
