import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Header3 = () => {
  return (
    <header className="py-2 border-bottom bg-white">
      <Container>
        <Row className="align-items-center">
          {/* Logo */}
          <Col
            xs={12}
            md={3}
            className="text-center text-md-start mb-2 mb-md-0"
          >
            <img
              src="https://grabit-react-next.maraviyainfotech.com/assets/img/logo/logo.png"
              alt="Grabit Logo"
              style={{ height: "40px" }}
            />
          </Col>

          {/* Search Bar */}
          <Col xs={12} md={6}>
            <InputGroup>
              <Form.Control type="text" placeholder="Search Products..." />
              <InputGroup.Text>
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </Col>

         
          <Col
            xs={12}
            md={3}
            className="d-flex justify-content-md-end align-items-center text-center "
          >
            <FaUser className="me-2 fs-2" />{" "}
            <span className="me-3">Account LOGIN</span>
            <FaHeart className="me-2 fs-2" />{" "}
            <span className="me-3">
              Wishlist <strong>3-ITEMS</strong>
            </span>
            <FaShoppingBag className="me-2 fs-2" />{" "}
            <span>
              Cart <strong>3-ITEMS</strong>
            </span>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header3;
