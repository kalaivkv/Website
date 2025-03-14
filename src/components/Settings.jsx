import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const colors = [
  "#4fa078",
  "#338066",
  "#00664A",
  "#004D32",

  "rgb(100, 140, 255)",
  "rgb(86, 116, 205)",
  "rgb(46, 88, 216)",
  "rgb(40, 80, 190)",

  "#FFF9C4",
  "#FFF176",
  "#FFD700",
  "#FFC107",

  "#FFEBF1",
  "#FF69B4",
  "#FF2D92",
  "#C71585",

  "#FFE0B2",
  "#FFB74D",
  "#FF9800",
  "#E65100",

  "#81D4FA",
  "#00BFFF",
  "#29B6F6",
  "#0288D1",

  "#FFCDD2",
  "#EF5350",
  "#D32F2F",
  "#B71C1C",

  "#B0C4D4",
  "#7D98AF",
  "#5B798E",
  "#3A5A70",
];

const Settings = ({ setTheme, theme, setSelectedColor, selectedColor }) => {
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: open ? 0 : 200, opacity: open ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className={`fixed right-0 top-0 h-full w-64 shadow-lg flex flex-col p-5 rounded-l-xl border-l z-[9999] ${
          theme === "dark"
            ? "bg-gray-900 border-gray-700 text-white"
            : "bg-white border-gray-300 text-black"
        }`}
      >
        <div
          className="absolute top-1/2 transform -translate-y-1/2 -left-12 w-12 h-12 flex items-center justify-center rounded-lg shadow-md cursor-pointer border"
          style={{
            backgroundColor: theme === "dark" ? "#333" : "#e5e5e5",
            borderColor: theme === "dark" ? "#555" : "#ddd",
          }}
          onClick={() => setOpen(!open)}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            <FiSettings size={24} color={theme === "dark" ? "#fff" : "#333"} />
          </motion.div>
        </div>

        <h3 className="mt-5 text-lg font-semibold">Tools</h3>
        <hr
          className={`w-full my-2 ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        />

        <h4 className="font-medium mt-4">Theme Mode</h4>
        <div className="mt-2 flex gap-2">
          <button
            className={`w-16 h-12 rounded-lg flex items-center justify-center border-2 ${
              theme === "light"
                ? "border-black text-black"
                : "border-gray-400 text-gray-400"
            }`}
            onClick={() => setTheme("light")}
          >
            <div className="w-12 h-8 bg-gray-300 rounded-md flex items-center justify-center">
              Light
            </div>
          </button>
          <button
            className={`w-16 h-12 rounded-lg flex items-center justify-center border-2 ${
              theme === "dark"
                ? "border-white text-white"
                : "border-gray-500 text-gray-500"
            }`}
            onClick={() => setTheme("dark")}
          >
            <div className="w-12 h-8 bg-black rounded-md flex items-center justify-center">
              Dark
            </div>
          </button>
        </div>

        <h4 className="font-medium mt-4">Select Color</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-md flex items-center justify-center cursor-pointer border"
              style={{
                backgroundColor: color,
                borderColor: theme === "dark" ? "#fff" : "#ccc",
              }}
              onClick={() => setSelectedColor(color)}
            >
              {selectedColor === color && <FaCheck className="text-white" />}
            </div>
          ))}
        </div>
      </motion.div>

      {!open && (
        <div
          className="fixed right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-[9999] w-12 h-12 flex items-center justify-center rounded-lg shadow-md border"
          style={{
            backgroundColor: theme === "dark" ? "#333" : "#e5e5e5",
            borderColor: theme === "dark" ? "#555" : "#ddd",
          }}
          onClick={() => setOpen(true)}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            <FiSettings size={24} color={theme === "dark" ? "#fff" : "#333"} />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Settings;
