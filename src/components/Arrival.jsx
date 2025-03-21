import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import productData from "./ProductData";

const categories = ["ALL", "SNACK & SPICES", "FRUITS", "VEGETABLES"];

const Arrival = ({ selectedColor }) => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [visibleCount, setVisibleCount] = useState(15);

  let filteredProducts =
    activeCategory === "ALL"
      ? [...productData].sort((a, b) => b.price - a.price)
      : productData.filter((product) => product.category === activeCategory);

  const displayedProducts =
    activeCategory === "ALL"
      ? filteredProducts.slice(0, visibleCount)
      : filteredProducts;

  return (
    <div className="container">
      <div className="w-full p-6">
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

          <div className="flex space-x-6 gap-3 mt-4 md:mt-0">
            {categories.map((category, index) => (
              <Typography
                key={index}
                variant="body2"
                style={{
                  color:
                    activeCategory === category ? selectedColor : "#6b7280",
                  borderBottom:
                    activeCategory === category
                      ? `2px solid ${selectedColor}`
                      : "none",
                  cursor: "pointer",
                  transition: "color 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.target.style.color = selectedColor)}
                onMouseLeave={(e) =>
                  (e.target.style.color =
                    activeCategory === category ? selectedColor : "#6b7280")
                }
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(15);
                }}
              >
                {category}
              </Typography>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-4">
          {displayedProducts.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm ">
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

        {activeCategory === "ALL" && visibleCount < productData.length && (
          <div className="flex justify-center mt-4">
            <Button
              variant="contained"
              style={{ backgroundColor: selectedColor, color: "white" }}
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
