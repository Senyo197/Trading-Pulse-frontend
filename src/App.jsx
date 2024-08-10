import React from "react";
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
import { SearchProvider } from "./Components/SearchContext";

export default function App() {
  return (
    <Router>
      <SearchProvider>
        <Layout>
          <div className="flex">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/aud" element={<AUDChart />} />
              <Route path="/" element={<USDChart />} />
              <Route path="/cad" element={<CADChart />} />
              <Route path="/chf" element={<CHFChart />} />
              <Route path="/cny" element={<CNYChart />} />
              <Route path="/eur" element={<EURChart />} />
              <Route path="/gbp" element={<GBPChart />} />
              <Route path="/jpy" element={<JPYChart />} />
              <Route path="/nzd" element={<NZDChart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Layout>
        <Footer />
      </SearchProvider>
    </Router>
  );
}
