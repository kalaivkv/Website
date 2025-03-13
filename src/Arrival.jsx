import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import productData from "./ProductData";

const categories = ["ALL", "SNACK & SPICES", "FRUITS", "VEGETABLES"];

const Arrival = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(15); // Initially show 15 products

  // Filter products based on selected category
  let filteredProducts =
    activeCategory === "ALL"
      ? [...productData].sort((a, b) => b.price - a.price) // Sort High → Low
      : productData.filter((product) => product.category === activeCategory);

  // Limit products to visibleCount in "ALL" category
  const displayedProducts =
    activeCategory === "ALL" ? filteredProducts.slice(0, visibleCount) : filteredProducts;

  return (
    <div className="container">
      <div className="w-full p-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Typography variant="h5" className="font-bold">
              <span className="text-gray-800">New </span>
              <span className="text-green-500">Arrivals</span>
            </Typography>
            <Typography variant="body2" className="text-gray-500">
              Shop online for new arrivals and get free shipping!
            </Typography>
          </div>

          {/* Category Tabs */}
          <div className="flex space-x-6 gap-3 mt-4 md:mt-0">
            {categories.map((category, index) => (
              <Typography
                key={index}
                variant="body2"
                className={`cursor-pointer transition duration-300 ${
                  activeCategory === category
                    ? "text-green-500 font-semibold border-b-2 border-green-500"
                    : "text-gray-500 hover:text-green-500"
                }`}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(15); // Reset count when category changes
                }}
              >
                {category}
              </Typography>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-4">
          {displayedProducts.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-sm "
            >
              {/* Image Container for Zoom Effect */}
              <div className="relative overflow-hidden  cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
                {product.sale && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
                {product.newArrival && (
                  <span className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    NEW
                  </span>
                )}
              </div>
              <Typography variant="body2" className="text-gray-500 mt-2">
                {product.category}
              </Typography>
              <Typography variant="p" className="font-semibold">
                {product.name}
              </Typography>
              <div className="flex items-center mt-1">
                <span className="text-yellow-500">
                  {"★".repeat(product.rating)}
                </span>
                <span className="text-gray-300">
                  {"★".repeat(5 - product.rating)}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-black-500 font-bold">
                  ${product.price}
                </span>
                <span className="text-gray-400 line-through ms-2">
                  ${product.oldPrice}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button (Only for "ALL" category) */}
        {activeCategory === "ALL" && visibleCount < productData.length && (
          <div className="flex justify-center mt-4">
            <Button
              variant="contained"
              color="success"
              onClick={() => setVisibleCount(visibleCount + 15)}
            >
              Show More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Arrival;
