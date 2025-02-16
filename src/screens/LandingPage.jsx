import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  const handleStartBuilding = () => {
    console.log("Start Building button clicked");
    setButtonDisabled(true);
    navigate("/builder");
  };

  return (
    <div className="min-h-screen h-full flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">IRS Websites</h1>
      <p className="text-xl mb-8">Build your perfect website effortlessly.</p>
      <button
        onClick={handleStartBuilding}
        disabled={buttonDisabled}
        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-gray-200 cursor-pointer disabled:opacity-50"
      >
        Start Building
      </button>
    </div>
  );
}