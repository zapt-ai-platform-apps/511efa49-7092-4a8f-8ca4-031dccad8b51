import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WebsiteBuilder() {
  const [websiteTitle, setWebsiteTitle] = useState("My Awesome Website");
  const [websiteDescription, setWebsiteDescription] = useState("Welcome to my website built with IRS Websites.");
  const [colorScheme, setColorScheme] = useState("#000000");
  const navigate = useNavigate();

  const handleBack = () => {
    console.log("Navigated back to Landing Page");
    navigate("/");
  };

  const handleTitleChange = (e) => {
    setWebsiteTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setWebsiteDescription(e.target.value);
  };

  const handleColorSchemeChange = (e) => {
    setColorScheme(e.target.value);
  };

  return (
    <div className="min-h-screen h-full p-4 bg-gray-100 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Website Builder</h2>
        <button
          onClick={handleBack}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Back to Home
        </button>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Website Title</label>
            <input
              type="text"
              value={websiteTitle}
              onChange={handleTitleChange}
              className="box-border w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              value={websiteDescription}
              onChange={handleDescriptionChange}
              className="box-border w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Color Scheme</label>
            <input
              type="color"
              value={colorScheme}
              onChange={handleColorSchemeChange}
              className="box-border w-12 h-12 p-1 border border-gray-300 rounded"
            />
          </div>
        </form>
        <div className="mt-8 p-4 border border-gray-300 rounded bg-white">
          <h3 className="text-2xl font-bold" style={{ color: colorScheme }}>
            {websiteTitle}
          </h3>
          <p>{websiteDescription}</p>
        </div>
      </div>
    </div>
  );
}