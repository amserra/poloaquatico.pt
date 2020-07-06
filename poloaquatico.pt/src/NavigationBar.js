import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ListGroup from "react-bootstrap/ListGroup";

const NavigationBar = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="md"
      variant="dark"
      bg="secondary"
      className="text-uppercase"
    >
      <Navbar.Brand href="#home">
        <img
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Home"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav navbar-nav ml-auto">
          <Nav.Link href="#deets">Notícias</Nav.Link>
          <Nav.Link href="#memes">Artigos</Nav.Link>
          <Nav.Link href="#memes">Galeria</Nav.Link>
          <Nav.Link href="#memes">Apostas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
