import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@mui/material";
import slide1 from "./assets/1.jpg";
import slide2 from "./assets/2.jpg";

const HeroSlider = () => {
  return (
    <div className="container">
      <div className="w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={2200}
          pagination={{ clickable: true }}
          className="hero-slider"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] flex items-center ps-5">
              {/* Dark Overlay for Visibility */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Text Section - Centered */}
              <div className="absolute z-10 text-center text-black px-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Explore Fresh & Juicy Fruits
                </h2>
                <p className="text-lg md:text-xl mt-2 text-gray-600">
                  Hurry! Limited stock available.
                </p>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: "999px",
                    textTransform: "none",
                  }}
                >
                  Shop Now
                </Button>
              </div>

              {/* Full-Width Image */}
              <img
                src={slide1}
                alt="Fresh Fruits"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] flex items-center ps-1">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Centered Text Section */}
              <div className="absolute z-10 text-center text-black px-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Melt away your worries with a scoop!
                </h2>
                <p className="text-lg md:text-xl mt-2 text-gray-600">
                  Hurry! Limited stock available.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    borderRadius: "999px",
                    textTransform: "none",
                  }}
                >
                  Shop Now
                </Button>
              </div>

              {/* Full-Width Image */}
              <img
                src={slide2}
                alt="Ice Cream"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
