import React from "react";
import { Button } from "@mui/material";
import image1 from "./assets/new1.jpg"; // Update with correct paths
import image2 from "./assets/new2.jpg"; // Update with correct paths

const offers = [
  {
    id: 1,
    image: image1,
    discount: "70% Off",
    title: "Tasty Snack & Fastfood",
    description: "The Flavor Of Something Special",
  },
  {
    id: 2,
    image: image2,
    discount: "50% Off",
    title: "Fresh Fruits & Veggies",
    description: "A Healthy Meal For Every One",
  },
];

const NewOffer = () => {
  return (
    <>
      {/* Internal CSS for Media Queries */}
      <style>
        {`
          @media (max-width: 640px) { /* Mobile */
            .offer-title { font-size: 14px; }
            .offer-desc { font-size: 9px; }
            .offer-btn { font-size: 10px; padding: 6px 10px; }
          }

          @media (min-width: 641px) and (max-width: 1024px) { /* Tablet */
            .offer-title { font-size: 16px; }
            .offer-desc { font-size: 14px; }
            .offer-btn { font-size: 14px; padding: 8px 14px; }
          }

          @media (min-width: 1025px) { /* Desktop */
            .offer-title { font-size: 23px; }
            .offer-desc { font-size: 16px; }
            .offer-btn { font-size: 16px; padding: 10px 16px; }
          }
        `}
      </style>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative rounded-lg overflow-hidden group  cursor-pointer"
            >
              {/* Image */}
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 "
              />

              {/* Overlay */}
              <div className="absolute inset-0 p-3">
                <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded mb-2">
                  {offer.discount}
                </span>
              </div>

              <div className="absolute inset-0 flex flex-col justify-center items-end p-4">
                <h4 className="offer-title text-black font-bold leading-tight break-words line-clamp-2">
                  {offer.title}
                </h4>
                <p className="offer-desc text-gray-500 mb-3">
                  {offer.description}
                </p>
                <Button
                  variant="contained"
                  color="success"
                  className="offer-btn"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewOffer;
