import React from "react";

const ToggleThisMonth = ({ handleSearch }) => {
    const handleButtonClick = () => {
        const currentDate = new Date();
        const firstDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1
        ).toISOString().split('T')[0];
        const lastDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0
        ).toISOString().split('T')[0];
        handleSearch(firstDayOfMonth, lastDayOfMonth);
    };

    return (
        <div className="mb-2">
            <button onClick={handleButtonClick} className="text-sm mt-4 ml-2">
                This Month
            </button>
        </div>
    );
};

export default ToggleThisMonth;
