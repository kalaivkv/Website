import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Button, Container, Row, Col } from "react-bootstrap";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import "./HeroSlider.css"; // Custom CSS file

const HeroSlider = () => {
  return (
    <Container fluid className="px-0">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="hero-slider"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide-container">
            <Row className="align-items-center">
              {/* Text & Button on the Left */}
              <Col md={6} className="text-container">
                <h2>Explore Fresh & Juicy Fruits</h2>
                <p>Hurry! Limited stock available.</p>
                <Button variant="success">Shop Now</Button>
              </Col>
              {/* Image on the Right */}
              <Col md={6} className="image-container">
                <img src={slide1} alt="Slide 1" className="slide-image" />
              </Col>
            </Row>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide-container">
            <Row className="align-items-center">
              {/* Text & Button on the Left */}
              <Col md={6} className="text-container">
                <h2>Melt away your worries with a scoop!</h2>
                <p>Hurry! Limited stock available.</p>
                <Button variant="primary">Shop Now</Button>
              </Col>
              {/* Image on the Right */}
              <Col md={6} className="image-container">
                <img src={slide2} alt="Slide 2" className="slide-image" />
              </Col>
            </Row>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default HeroSlider;
