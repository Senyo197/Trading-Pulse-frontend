import React, { useState, useEffect } from "react";
import "./Components/index.css";
import NotFound from "./Components/NotFound";
import Layout from "./Components/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AUDChart from "./Components/AUDChart";
import USDChart from "./Components/USDChart";
import CADChart from "./Components/CADChart";
import CHFChart from "./Components/CHFChart";
import CNYChart from "./Components/CNYChart";
import EURChart from "./Components/EURChart";
import GBPChart from "./Components/GBPChart";
import JPYChart from "./Components/JPYChart";
import NZDChart from "./Components/NZDChart";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Disclaimer from "./Components/Disclaimer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading data, you can replace this with your actual data loading logic
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        // Display spinner while loading
        <div className="spinner"></div>
      ) : (
        // Render the app content when loading is complete
        <>
          <Layout>
            <div className="flex">
              <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/disclaimer" element={<Disclaimer />} />
                <Route exact path="/aud" element={<AUDChart />} />
                <Route exact path="/" element={<USDChart />} />
                <Route exact path="/cad" element={<CADChart />} />
                <Route exact path="/chf" element={<CHFChart />} />
                <Route exact path="/cny" element={<CNYChart />} />
                <Route exact path="/eur" element={<EURChart />} />
                <Route exact path="/gbp" element={<GBPChart />} />
                <Route exact path="/jpy" element={<JPYChart />} />
                <Route exact path="/nzd" element={<NZDChart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Layout>
          <Footer />
        </>
      )}
    </Router>
  );
}
