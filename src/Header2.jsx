import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import "./Header2.css";


const Header2 = () => {
  return (
    
    <div className="bg-light text-secondary displaying">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left Section - Contact Info */}
          <Col xs={12} md={4} className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
            <FaPhone size={14} className="me-1" /> +91 987 654 3210
            <span className="mx-2">|</span>
            <FaWhatsapp size={14} className="me-1" /> +91 987 654 3210
          </Col>

          {/* Center Section - Branding */}
          <Col xs={12} md={4} className="text-center mb-2 mb-md-0">
            World's Fastest Online Shopping Destination
          </Col>

          {/* Right Section - Menu */}
          <Col xs={12} md={4} className="text-md-end">
            <span className="me-3">Help?</span>
            <span className="me-3">Track Order?</span>
            <select className="form-select d-inline w-auto me-2">
              <option>English</option>
              <option>French</option>
            </select>
            <select className="form-select d-inline w-auto">
              <option>Dollar</option>
              <option>Euro</option>
            </select>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header2;
