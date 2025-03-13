import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import { Container } from "@mui/material";
import {
  Fastfood,
  LocalDrink,
  Icecream,
  Egg,
  Apple,
  LocalPizza,
} from "@mui/icons-material";

// Category Data
const categories = [
  {
    id: 1,
    name: "Snack & Spice",
    items: "59 Items",
    icon: <Fastfood />,
    bg: "bg-indigo-100",
  },
  {
    id: 2,
    name: "Juice & Drinks",
    items: "845 Items",
    icon: <LocalDrink />,
    bg: "bg-yellow-100",
  },
  {
    id: 3,
    name: "Seafood",
    items: "652 Items",
    icon: <Icecream />,
    bg: "bg-orange-100",
  },
  {
    id: 4,
    name: "Fast Food",
    items: "320 Items",
    icon: <LocalPizza />,
    bg: "bg-green-100",
    discount: "20%",
  },
  { id: 5, name: "Eggs", items: "154 Items", icon: <Egg />, bg: "bg-red-100" },
  {
    id: 6,
    name: "Fruits",
    items: "320 Items",
    icon: <Apple />,
    bg: "bg-amber-100",
    discount: "30%",
  },
];

const Slider2 = ({selectedColor}) => {
  return (
    <Container maxWidth="lg">
      <Swiper
        modules={[FreeMode]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
        className="py-5"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div
              className={`relative p-6 rounded-lg text-center pt-3 shadow-md transition-all duration-300 ${category.bg} border-2 border-transparent hover:border-gradient`}
            >
              {category.discount && (
                <span className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded-lg">
                  {category.discount}
                </span>
              )}
              <div
                className="mb-3 text-4xl flex justify-center"
                style={{ color: selectedColor }} // Apply the selected color
              >
                {category.icon}
              </div>{" "}
              <h5 className="text-lg font-semibold text-gray-800">
                {category.name}
              </h5>
              <p className="text-sm text-gray-600">{category.items}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider2;
