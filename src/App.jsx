import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage.jsx";
import WebsiteBuilder from "./screens/WebsiteBuilder.jsx";
import MadeOnZaptBadge from "./components/MadeOnZaptBadge.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/builder" element={<WebsiteBuilder />} />
          </Routes>
        </div>
        <MadeOnZaptBadge />
      </div>
    </Router>
  );
}