import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSettings } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const colors = [
  "#4fa078",
 "#338066", // Soft Green
  "#00664A", // Deep Green
  "#004D32" , // Dark Teal Green (Original)

 
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

  "#B0C4D4", // Light Steel Blue  
  "#7D98AF", // Soft Blue Gray  
  "#5B798E", // Original (Muted Blue-Gray)  
  "#3A5A70",  // Dark Slate Blue  

  

 
];

const Settings = ({ setSelectedColor, selectedColor }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Settings Panel */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: open ? 0 : 200, opacity: open ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col p-5 rounded-l-xl border-l border-gray-300 z-[9999]"
      >
        {/* Close Button (Settings Icon) */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 -left-12 bg-gray-600 text-white w-12 h-12 flex items-center justify-center rounded-lg shadow-md cursor-pointer border border-gray-600"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            <FiSettings size={24} />
          </motion.div>
        </div>

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
      </motion.div>

      {/* Floating Settings Icon (Always Centered) */}
      {!open && (
        <div
          className="fixed right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-[9999] bg-gray-600 w-12 h-12 flex items-center justify-center rounded-lg shadow-md border border-gray-600"
          onClick={() => setOpen(true)}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          >
            <FiSettings size={24} className="text-white" />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Settings;
