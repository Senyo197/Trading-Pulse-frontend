import React from "react";

const ToggleThisYear = ({ handleSearch }) => {
    const handleButtonClick = () => {
        const currentDate = new Date();
        const thisYearStartDate = new Date(
            currentDate.getFullYear(),
            0,
            1
        ).toISOString().split('T')[0];
        const lastWeekEndDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - currentDate.getDay()
        ).toISOString().split('T')[0];
        handleSearch(thisYearStartDate, lastWeekEndDate);
    };

    return (
        <div className="mb-2">
            <button onClick={handleButtonClick} className="bg-black text-white text-sm px-2 py-1 rounded-md mt-4 ml-2">
                This Year
            </button>
        </div>
    );
};

export default ToggleThisYear;
