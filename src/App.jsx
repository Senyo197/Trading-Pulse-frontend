import React, { useState } from "react";
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
import Spinner from "./Spinner"; // Import Spinner component

export default function App() {
  const [loading, setLoading] = useState(true); // State to manage loading state

  // Simulate loading delay
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  // Render spinner if loading
  if (loading) {
    return <Spinner />;
  }

  // Render the app content once loading is done
  return (
    <Router>
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
    </Router>
  );
}
