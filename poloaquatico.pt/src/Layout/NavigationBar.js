import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

class NavigationBar extends Component {
  state = {
    clickedHome: false,
    expandedNav: false,
    transitionHamburger: false,
    active: [false, false, false, false, false],
  };

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        expanded={this.state.expandedNav}
        bg="secondary"
        variant="dark"
        id="mainNav"
      >
        <Container>
          <Link to="/" className="navbar-brand js-scroll-trigger">
            <Logo
              onClick={() =>
                this.state.expandedNav
                  ? this.setState({
                      clickedHome: true,
                      expandedNav: false,
                      transitionHamburger: "rotate-hamburger",
                      active: [true, false, false, false, false],
                    })
                  : this.setState({
                      clickedHome: true,
                      expandedNav: false,
                      active: [true, false, false, false, false],
                    })
              }
              onTransitionEnd={() => this.setState({ clickedHome: false })}
              width="50"
              height="50"
              className="img-fluid"
              id={this.state.clickedHome ? "navbar-logo" : ""}
            ></Logo>
          </Link>

          <Navbar.Toggle
            onClick={() =>
              this.state.expandedNav
                ? this.setState({
                    expandedNav: false,
                    transitionHamburger: "rotate-hamburger",
                  })
                : this.setState({
                    expandedNav: "expanded",
                    transitionHamburger: "rotate-hamburger",
                  })
            }
            onTransitionEnd={() =>
              this.setState({ transitionHamburger: false })
            }
            aria-controls="navbarResponsive"
            id="navbar-toggler"
            className={this.state.transitionHamburger}
          ></Navbar.Toggle>

          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ml-auto">
              <Nav.Item className="py-lg-3 py-2 px-0 px-lg-3">
                <Link
                  to="/noticias"
                  id={this.state.active[1] ? "navbar-active" : undefined}
                  onClick={() =>
                    this.setState({
                      expandedNav: false,
                      transitionHamburger: "rotate-hamburger",
                      active: [false, true, false, false, false],
                    })
                  }
                  className="nav-link text-white"
                >
                  Notícias
                </Link>
              </Nav.Item>
              <Nav.Item className="py-lg-3 py-2 px-0 px-lg-3">
                <Link
                  to="/artigos"
                  id={this.state.active[2] ? "navbar-active" : undefined}
                  onClick={() =>
                    this.setState({
                      expandedNav: false,
                      transitionHamburger: "rotate-hamburger",
                      active: [false, false, true, false, false],
                    })
                  }
                  className="nav-link text-white"
                >
                  Artigos
                </Link>
              </Nav.Item>
              <Nav.Item className="py-lg-3 py-2 px-0 px-lg-3">
                <Link
                  to="/galeria"
                  id={this.state.active[3] ? "navbar-active" : undefined}
                  onClick={() =>
                    this.setState({
                      expandedNav: false,
                      transitionHamburger: "rotate-hamburger",
                      active: [false, false, false, true, false],
                    })
                  }
                  className="nav-link text-white"
                >
                  Galeria
                </Link>
              </Nav.Item>

              <Nav.Item className="py-lg-3 py-2 px-0 px-lg-3">
                <Link
                  to="/apostas"
                  id={this.state.active[4] ? "navbar-active" : undefined}
                  onClick={() =>
                    this.setState({
                      expandedNav: false,
                      transitionHamburger: "rotate-hamburger",
                      active: [false, false, false, false, true],
                    })
                  }
                  className="nav-link text-white"
                >
                  Apostas
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
