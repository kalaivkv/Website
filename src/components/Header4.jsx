import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { FaThLarge, FaMapMarkerAlt, FaBolt } from "react-icons/fa";

const Header4 = ({ selectedColor, theme }) => {
  return (
    <Container
      fluid
      className={`py-2 d-none d-md-block ${
        theme === "dark" ? "bg-gray-700 text-white" : "bg-light text-dark"
      }`}
    >
      <Container>
        <Row className="align-items-center ">
          <Col
            xs={12}
            md={3}
            className="text-center text-md-start mb-2 mb-md-0"
          >
            <Dropdown>
              <Dropdown.Toggle
                className="w-100 d-flex align-items-center justify-content-center gap-2 border-0"
                style={{ backgroundColor: selectedColor, color: "white" }}
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

          <Col
            xs={12}
            md={6}
            className="d-flex flex-wrap justify-content-center gap-2 gap-md-3 text-center"
          >
            {["Home"].map((title, index) => (
              <Dropdown key={index}>
                <Dropdown.Toggle
                  variant="link"
                  className={`border-0 text-decoration-none p-1 ${
                    theme === "dark" ? "text-white" : "text-dark"
                  }`}
                >
                  {title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Grocery</Dropdown.Item>
                  <Dropdown.Item href="#">Fashion1</Dropdown.Item>
                  <Dropdown.Item href="#">Fashion2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ))}

            {["Categories", "Products", "Blog", "Pages"].map((title, index) => (
              <Dropdown key={index}>
                <Dropdown.Toggle
                  variant="link"
                  className={`border-0 text-decoration-none p-1 ${
                    theme === "dark" ? "text-white" : "text-dark"
                  }`}
                >
                  {title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Classic</Dropdown.Item>
                  <Dropdown.Item href="#">Banner</Dropdown.Item>
                  <Dropdown.Item href="#">Column</Dropdown.Item>
                  <Dropdown.Item href="#">List</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ))}

            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                className={`border-0 text-decoration-none p-1 d-flex align-items-center ${
                  theme === "dark" ? "text-white" : "text-dark"
                }`}
              >
                <FaBolt size={16} className="me-1" />
                <span>Offers</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Discounts</Dropdown.Item>
                <Dropdown.Item href="#">Clearance Sale</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs={12} md={3} className="text-center text-md-end mt-2 mt-md-0">
            <Dropdown>
              <Dropdown.Toggle
                className="w-100 d-flex align-items-center justify-content-center gap-2 border-0"
                style={{ backgroundColor: selectedColor, color: "white" }}
              >
                <FaMapMarkerAlt size={18} />
                <span>Location</span>
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
