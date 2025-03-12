import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { FaThLarge, FaMapMarkerAlt, FaBolt } from "react-icons/fa";

const Header4 = () => {
  return (
    <Container fluid className="bg-light py-2">
      <Container>
        <Row className="align-items-center">
          {/* Left Side - Categories Dropdown */}
          <Col
            xs={12}
            md={3}
            className="text-center text-md-start mb-2 mb-md-0"
          >
            <Dropdown>
              <Dropdown.Toggle
                className="w-100 d-flex align-items-center justify-content-center gap-2 border-0"
                style={{ backgroundColor: "rgb(79, 160, 120)", color: "white" }}
              >
                <FaThLarge size={18} />
                <span>All Categories</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Electronics</Dropdown.Item>
                <Dropdown.Item href="#">Fashion</Dropdown.Item>
                <Dropdown.Item href="#">Home & Furniture</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* Center - Navigation Dropdowns */}
          <Col
            xs={12}
            md={6}
            className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 text-center"
          >
            {["Home", "Categories", "Products", "Blog", "Pages"].map(
              (title, index) => (
                <Dropdown key={index}>
                  <Dropdown.Toggle
                    variant="link"
                    className="text-dark border-0 text-decoration-none p-1"
                  >
                    {title}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">Option 1</Dropdown.Item>
                    <Dropdown.Item href="#">Option 2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )
            )}

            {/* Offers Dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className="d-flex align-items-center text-dark border-0 text-decoration-none p-1"
              >
                <FaBolt size={16} className="me-1" />
                <span>Offers</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Option 1</Dropdown.Item>
                <Dropdown.Item href="#">Option 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* Right Side - Location Dropdown */}
          <Col xs={12} md={3} className="text-center text-md-end mt-2 mt-md-0">
            <Dropdown>
              <Dropdown.Toggle
                className="w-100 d-flex align-items-center justify-content-center gap-2 border-0"
                style={{ backgroundColor: "rgb(79, 160, 120)", color: "white" }}
              >
                <FaMapMarkerAlt size={18} />
                <span>New York</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Los Angeles</Dropdown.Item>
                <Dropdown.Item href="#">Chicago</Dropdown.Item>
                <Dropdown.Item href="#">San Francisco</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header4;
