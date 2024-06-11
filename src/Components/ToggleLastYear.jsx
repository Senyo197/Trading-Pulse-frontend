import React from "react";

const ToggleLastYear = ({ handleSearch }) => {
    const handleButtonClick = () => {
        const currentDate = new Date();
        const lastYearStartDate = new Date(
            currentDate.getFullYear() - 1,
            0,
            1
        ).toISOString().split('T')[0];
        const lastYearEndDate = new Date(
            currentDate.getFullYear() - 1,
            11,
            31
        ).toISOString().split('T')[0];
        handleSearch(lastYearStartDate, lastYearEndDate);
    };

    return (
        <div className="mb-2">
            <button onClick={handleButtonClick} className="text-sm mt-4 ml-2">
                Last Year
            </button>
        </div>
    );
};

export default ToggleLastYear;