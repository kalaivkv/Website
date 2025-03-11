import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "./Slider2.css";
import { Container } from "react-bootstrap";

// Category Data
const categories = [
  { id: 1, name: "Snack & Spice", items: "59 Items", icon: "fa-solid fa-burger", bg: "#E8EAF6" },
  { id: 2, name: "Juice & Drinks", items: "845 Items", icon: "fa-solid fa-wine-glass", bg: "#FFF9C4" },
  { id: 3, name: "Seafood", items: "652 Items", icon: "fa-solid fa-fish", bg: "#FFECB3" },
  { id: 4, name: "Fast Food", items: "320 Items", icon: "fa-solid fa-pizza-slice", bg: "#C8E6C9", discount: "20%" },
  { id: 5, name: "Eggs", items: "154 Items", icon: "fa-solid fa-egg", bg: "#FFCDD2" },
  { id: 6, name: "Fruits", items: "320 Items", icon: "fa-solid fa-apple-whole", bg: "#FFE0B2", discount: "30%" },
];

const Slider2 = () => {
  return (
    <Container >
      <Swiper
        modules={[FreeMode]}
        slidesPerView={4}
        spaceBetween={20}
        loop={true} // Infinite loop without stopping
        freeMode={true} // Allows smooth scrolling
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
        className="slider2"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="category-card" style={{ backgroundColor: category.bg }}>
              {category.discount && <span className="discount-badge">{category.discount}</span>}
              <div className="card-content">
                <i className={`category-icon ${category.icon}`}></i>
                <h5>{category.name}</h5>
                <p>{category.items}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider2;
