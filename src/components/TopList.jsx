import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import lemon from "../Images/s1.jpg";
import ginger from "../Images/s2.jpg";
import mango from "../Images/s3.jpg";
import dates from "../Images/s4.jpg";
import nuts from "../Images/s5.jpg";
import blueberry from "../Images/s6.jpg";
import nutmix from "../Images/s7.jpg";
import tomato from "../Images/s8.jpg";
import coffee from "../Images/s9.jpg";

const products = [
  {
    title: "Top Selling",
    items: [
      {
        name: "Lemon - Seedless",
        category: "Vegetables",
        price: 42,
        oldPrice: 45,
        image: lemon,
      },
      {
        name: "Mango - Kesar",
        category: "Fruits",
        price: 62,
        oldPrice: 65,
        image: mango,
      },
      {
        name: "Mixed Nuts & Almonds",
        category: "Driedfruit",
        price: 10,
        oldPrice: 11,
        image: nuts,
      },
    ],
  },
  {
    title: "Top Rated",
    items: [
      {
        name: "Ginger - Organic",
        category: "Vegetables",
        price: 62,
        oldPrice: 65,
        image: ginger,
      },
      {
        name: "Dates Value Pouch",
        category: "Driedfruit",
        price: 56,
        oldPrice: 78,
        image: dates,
      },
      {
        name: "Blue Berry",
        category: "Fruits",
        price: 25,
        oldPrice: 30,
        image: blueberry,
      },
    ],
  },
  {
    title: "Trending Items",
    items: [
      {
        name: "Healthy Nutmix, 200g",
        category: "Driedfruit",
        price: 42,
        oldPrice: 45,
        image: nutmix,
      },
      {
        name: "Organic Fresh Tomato",
        category: "Vegetables",
        price: 25,
        oldPrice: 30,
        image: tomato,
      },
      {
        name: "Coffee With Chocolate",
        category: "Coffee",
        price: 62,
        oldPrice: 65,
        image: coffee,
      },
    ],
  },
];

const TopList = ({ theme }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {products.map((section, index) => (
          <div
            key={index}
            className={`shadow-lg p-5 rounded-lg ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          >
            <div className="flex justify-between items-center pb-4">
              <h2 className="text-base font-semibold">
                <span className="text-black">
                  {section.title.split(" ")[0]}{" "}
                </span>
                <span className="text-green-600">
                  {section.title.split(" ")[1]}
                </span>
              </h2>
              {/* <div className="flex gap-2 text-gray-500">
                <FiChevronLeft className="cursor-pointer hover:text-gray-700" />
                <FiChevronRight className="cursor-pointer hover:text-gray-700" />
              </div> */}
            </div>

            <div className="flex flex-col gap-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between border rounded-lg p-3 shadow-sm hover:shadow-md transition w-full h-28 gap-1 ${
                    idx !== 0 ? "mt-6" : ""
                  }`}
                >
                  <div className="flex flex-col gap-1 w-3/4">
                    <h5 className="text-xs font-medium text-gray-800 truncate">
                      {item.name}
                    </h5>
                    <p className="text-[10px] text-gray-500">{item.category}</p>
                    <div className="flex gap-3">
                      <span className="text-sm font-bold">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        ${item.oldPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
