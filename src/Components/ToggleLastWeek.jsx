import React from "react";

const ToggleLastWeek = ({ handleSearch }) => {

    const handleButtonClick = () => {
        const currentDate = new Date();
        const lastWeekStartDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - currentDate.getDay() - 6
        ).toISOString().split('T')[0];
        const lastWeekEndDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate() - currentDate.getDay()
        ).toISOString().split('T')[0];
        handleSearch(lastWeekStartDate, lastWeekEndDate);
    };

    return (
        <div className="mb-2">
            <button onClick={handleButtonClick} className="bg-blue-500 text-white py-2 px-4 rounded">
                Last Week
            </button>
        </div>
    );
};

export default ToggleLastWeek;
