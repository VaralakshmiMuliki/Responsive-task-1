import React from "react";
import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrSearch } from "react-icons/gr";
import { Space } from "antd";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineShoppingCart,
  AiOutlineTwitter,
} from "react-icons/ai";

export const Header = () => {
  const menus = ["Home", "Blog", "PortFolio", "Shop", "Variations", "Elements"];

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      className="m-auto"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="	https://jevelin.shufflehound.com/wp-content/uploads/2016/05/Je_Logo_black_big.png"
            className="jevelin-logo "
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle  className="ham" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-menus">
            {menus.map((menu) => (
              <Nav.Link href="#pricing">{menu}</Nav.Link>
            ))}
            <Space>
              <AiOutlineShoppingCart className="cart-icon mr-1" />
              <GrSearch className="cart-icon mr-1" />
              <AiFillFacebook className="cart-icon mr-1" />
              <AiOutlineTwitter className="cart-icon mr-1" />
              <AiOutlineInstagram className="cart-icon mr-1" />
            </Space>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
