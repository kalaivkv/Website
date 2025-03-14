import React from "react";
import Button from "@mui/material/Button";
import adImage from "../Images/Image9.jpg";

const Advertisement = ({ selectedColor, theme }) => {
  return (
    <div className="container">
      <style>
        {`
          .ad-text { right: 0px; top: 64%; transform: translateY(-50%); max-width: 60%; } 

          @media (min-width: 640px) { 
            .ad-text { right: 20px; max-width: 50%; } 
          }

          @media (min-width: 768px) { 
            .ad-text { right: 40px; max-width: 40%; } 
          }

          @media (min-width: 1024px) { 
            .ad-text { right: 60px; max-width: 35%; } 
          }
        `}
      </style>

      <div
        className={`relative w-full h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg flex items-center justify-end ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <img
          src={adImage}
          alt="Fresh Fruits"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div
          className={`absolute ad-text text-right p-4 md:p-6 rounded-md z-10 ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">
            Fresh Fruits <br /> Healthy Products
          </h2>
          <p className="text-sm md:text-lg mt-2">
            <span
              className={`font-bold ${
                theme === "dark" ? "text-green-400" : "text-green-600"
              }`}
            >
              30% off sale
            </span>{" "}
            Hurry up!!!
          </p>

          <Button
            variant="contained"
            style={{ backgroundColor: selectedColor, color: "white" }}
            sx={{
              mt: 2,
              px: 3,
              py: 1,
              fontSize: "0.875rem",
              borderRadius: "8px",
              textTransform: "none",
            }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
