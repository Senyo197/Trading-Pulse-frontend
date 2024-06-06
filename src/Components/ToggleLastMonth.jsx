import React from "react";

const ToggleLastMonth = ({ handleSearch }) => {
    const handleButtonClick = () => {
        const currentDate = new Date();
        const lastMonthStartDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            1
        ).toISOString().split('T')[0];
        const lastMonthEndDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0
        ).toISOString().split('T')[0];
        handleSearch(lastMonthStartDate, lastMonthEndDate);
    };

    return (
        <div className="mb-2">
            <button onClick={handleButtonClick} className="bg-black text-white text-sm px-2 py-1 rounded-md mt-4 ml-2">
                Last Month
            </button>
        </div>
    );
};

export default ToggleLastMonth;