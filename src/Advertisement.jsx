import React from "react";
import Button from "@mui/material/Button";
import adImage from "./Images/Image9.jpg"; // Ensure the path is correct

const Advertisement = () => {
  return (
    <div className="container">
      <div className="relative w-full h-[350px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-lg flex items-center justify-end pr-10 md:pr-16 lg:pr-20">
      
      {/* Background Image */}
      <img
        src={adImage}
        alt="Fresh Fruits"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Text Content */}
      <div className="relative text-right text-gray-800  p-4 md:p-6 rounded-md max-w-[40%]">
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">
          Fresh Fruits <br /> Healthy Products
        </h2>
        <p className="text-sm md:text-lg mt-2">
          <span className="text-green-600 font-bold">30% off sale</span> Hurry up!!!
        </p>

        {/* Shop Now Button */}
        <Button
          variant="contained"
          color="success"
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
