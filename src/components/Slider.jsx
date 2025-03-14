import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from "@mui/material";
import slide1 from "../assets/1.jpg";
import slide2 from "../assets/2.jpg";

const HeroSlider = ({selectedColor}) => {
  return (
    <div className="container mx-auto">
      <style>
        {`
          @media (max-width: 640px) { /* Small screens */
            .hero-title { font-size: 1.2rem; } 
            .hero-title1 { font-size: .7rem; } 
            .hero-text { font-size: .9rem; } 
            .hero-text1 { font-size: 0.6rem; } 
            .hero-btn { font-size: 0.8rem; padding: 6px 12px; }
          }
          
          @media (min-width: 641px) and (max-width: 1024px) { /* Tablets */
            .hero-title { font-size: 2rem; } 
            .hero-text { font-size: 1rem; } 
            .hero-btn { font-size: 0.9rem; padding: 8px 16px; }
          }
          
          @media (min-width: 1025px) { /* Large screens */
            .hero-title { font-size: 2.5rem; } 
            .hero-text { font-size: 1.2rem; } 
            .hero-btn { font-size: 1rem; padding: 10px 20px; }
          }


          .hero-content { left: 20px; top: 47%; transform: translateY(-50%); } 

          @media (min-width: 640px) { /* Small screens */
            .hero-content { left: 30px; top: 70%; transform: translateY(-50%); } 
          }

          @media (min-width: 768px) { /* Tablets */
            .hero-content { left: 80px; top: 75%; } 
          }

          @media (min-width: 1024px) { /* Large screens */
            .hero-content { left: 50px; top: 50%; } 
          }


          .hero-content1 { left: 10px; top: 50%; transform: translateY(-50%); } 

          @media (min-width: 640px) { /* Small screens */
            .hero-content1 { left: 30px; top: 50%; transform: translateY(-50%); } 
          }

          @media (min-width: 768px) { /* Tablets */
            .hero-content1 { left: 80px; top: 75%; } 
          }

          @media (min-width: 1024px) { /* Large screens */
            .hero-content1 { left: 50px; top: 50%; } 
          }
        `}
      </style>

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
            <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="absolute z-10 text-center  text-black hero-content ">
                <h2 className="hero-title font-bold">
                  Explore Fresh & Juicy Fruits
                </h2>
                <p className="hero-text mt-2">Hurry! Limited stock available.</p>
                <Button
                  variant="contained"
                  style={{ backgroundColor: selectedColor, color: "white" }}
                  className="hero-btn mt-2"
                  sx={{ borderRadius: "999px", textTransform: "none" }}
                >
                  Shop Now
                </Button>
              </div>

              <img
                src={slide1}
                alt="Fresh Fruits"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-black/60"></div>

              <div className="absolute z-10 text-center text-black hero-content1 ">
                <h2 className="hero-title hero-title1 font-bold">
                  Melt away your worries <br /> with a scoop!
                </h2>
                <p className="hero-text hero-text1 mt-2">Hurry! Limited stock available.</p>
                <Button
                  variant="contained"
                  style={{ backgroundColor: selectedColor, color: "white" }}
                  className="hero-btn mt-2"
                  sx={{ borderRadius: "999px", textTransform: "none" }}
                >
                  Shop Now
                </Button>
              </div>

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
