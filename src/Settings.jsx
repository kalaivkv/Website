import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const colors = ["#4CAF50", "#8000FF", "#4169E1", "#FF8C66", "#22D3EE", "#2A52BE", "#FF3B30", "#FF2D92", "#5B798E", "#004D32"];

const Settings = () => {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [direction, setDirection] = useState("LTR");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {/* Settings Panel */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: open ? 0 : 200, opacity: open ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col p-5 rounded-l-xl border-l border-gray-300 z-50 ${
          open ? "block" : "hidden"
        }`}
      >
        {/* Rotating Settings Icon */}
        <div
          className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center rounded-lg shadow-md cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <motion.div animate={{ rotate: open ? 360 : 0 }} transition={{ duration: 1, ease: "linear" }}>
            <FiSettings size={24} />
          </motion.div>
        </div>

        {/* Tools Heading */}
        <h3 className="mt-5 text-lg font-semibold text-gray-800">Tools</h3>
        <hr className="w-full my-2 border-gray-300" />

        {/* Select Color */}
        <h4 className="text-gray-700 font-medium">Select Color</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-md flex items-center justify-center cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor === color && <FaCheck className="text-white" />}
            </div>
          ))}
        </div>

        

        {/* Dark Mode Toggle */}
        <h4 className="mt-4 text-gray-700 font-medium">Dark Modes</h4>
        <div className="mt-2 flex gap-3 p-1">
          {["Light", "Dark"].map((mode) => (
            <div
              key={mode}
              className={`w-20 h-16 border-2 flex flex-col items-center justify-center rounded-lg cursor-pointer p-1 ${
                (darkMode && mode === "Dark") || (!darkMode && mode === "Light") ? "border-black" : "border-gray-300"
              }`}
              onClick={() => setDarkMode(mode === "Dark")}
            >
              <div className={`w-14 h-10  rounded-md ${mode === "Dark" ? "bg-gray-900" : "bg-gray-200"}`}></div>
              <span className="text-sm text-gray-700">{mode}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Icon when Panel is Closed */}
      {!open && (
        <div
          className="fixed right-5 top-1/2 transform -translate-y-1/2 cursor-pointer z-50 bg-gray-500 w-12 h-12 flex items-center justify-center rounded-lg shadow-md"
          onClick={() => setOpen(true)}
        >
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }}>
            <FiSettings size={30} className="text-white" />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Settings;
