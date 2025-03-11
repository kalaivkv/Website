import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { FaThLarge, FaMapMarkerAlt, FaBolt } from "react-icons/fa";

const Header4 = () => {
  return (
    <Container fluid className="bg-light py-2">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Categories Dropdown */}
          <Col xs={12} md={3} className="text-center text-md-start">
            <Dropdown>
              <Dropdown.Toggle
                className="w-100 d-flex align-items-center justify-content-center gap-2 border-0"
                style={{ backgroundColor: "rgb(79, 160, 120)", color: "white" }}
              >
                <FaThLarge size={18} />
                <span>All Categories</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" className="text-decoration-none">Electronics</Dropdown.Item>
                <Dropdown.Item href="#" className="text-decoration-none">Fashion</Dropdown.Item>
                <Dropdown.Item href="#" className="text-decoration-none">Home & Furniture</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* Center Dropdowns */}
          <Col xs={12} md={6} className="d-flex justify-content-center gap-3">
            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-dark border-0 text-decoration-none">
                Home
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" className="text-decoration-none">Home 1</Dropdown.Item>
                <Dropdown.Item href="#" className="text-decoration-none">Home 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-dark border-0 text-decoration-none">
                Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" className="text-decoration-none">Men</Dropdown.Item>
                <Dropdown.Item href="#" className="text-decoration-none">Women</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-dark border-0 text-decoration-none">
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" className="text-decoration-none">Best Sellers</Dropdown.Item>
                <Dropdown.Item href="#" className="text-decoration-none">New Arrivals</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-dark border-0 text-decoration-none">
                Blog
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" className="text-decoration-none">Latest News</Dropdown.Item>
                <Dropdown.Item href="#" className="text-decoration-none">Tips & Guides</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-dark border-0 text-decoration-none">
                Pages
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" className="text-decoration-none">About Us</Dropdown.Item>
                <Dropdown.Item href="#" className="text-decoration-none">Contact</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="link" className="text-dark border-0 text-decoration-none">
                <FaBolt size={16} className="me-1" />
                Offers
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" className="text-decoration-none">Discounts</Dropdown.Item>
                <Dropdown.Item href="#" className="text-decoration-none">Clearance Sale</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* Right Side - Location Dropdown */}
          <Col xs={12} md={3} className="text-center text-md-end">
            <Dropdown>
              <Dropdown.Toggle
                className="w-100 d-flex align-items-center justify-content-center gap-2 border-0"
                style={{ backgroundColor: "rgb(79, 160, 120)", color: "white" }}
              >
                <FaMapMarkerAlt size={18} />
                <span>New York</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#" className="text-decoration-none">Los Angeles</Dropdown.Item>
                <Dropdown.Item href="#" className="text-decoration-none">Chicago</Dropdown.Item>
                <Dropdown.Item href="#" className="text-decoration-none">San Francisco</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header4;
