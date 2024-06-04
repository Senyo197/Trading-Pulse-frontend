import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [activeChart, setActiveChart] = useState("");

    const handleSetActive = (page) => {
        setActiveChart(page);
    };

    return (
        <footer className="bg-black text-white py-4 text-center border-t-2 border-white">
            <div>
                <Link
                    to="/about"
                    className={`sidebar-item mr-2 ${activeChart === "about" ? "active" : ""}`}
                    onClick={() => handleSetActive("about")}
                >
                    About
                </Link>
                <Link
                    to="/disclaimer"
                    className={`sidebar-item ${activeChart === "disclaimer" ? "active" : ""}`}
                    onClick={() => handleSetActive("disclaimer")}
                >
                    Disclaimer
                </Link>
            </div>
            <div className="mt-4">
                &copy; {new Date().getFullYear()} Trading Pulse. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
