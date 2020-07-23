import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavigationLink from "./NavigationLink";
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.location = props.location.pathname;
    this.state = {
      clickedHome: false,
      expandedNav: false,
      transitionHamburger: false,
      active: [false, false, false, false, false, false, false],
    };
  }

  componentDidMount() {
    var active, end;
    if ((end = this.location.indexOf("/", 1)) === -1)
      end = this.location.length;
    const loc = this.location.substr(0, end);
    switch (loc) {
      case "/":
        active = [true, false, false, false, false, false, false];
        break;
      case "/criador":
        active = [false, true, false, false, false, false, false];
        break;
      case "/noticias":
        active = [false, false, true, false, false, false, false];
        break;
      case "/artigos":
        active = [false, false, false, true, false, false, false];
        break;
      case "/galeria":
        active = [false, false, false, false, true, false, false];
        break;
      case "/apostas":
        active = [false, false, false, false, false, true, false];
        break;
      case "/doar":
        active = [false, false, false, false, false, false, true];
        break;
      default:
        active = [false, false, false, false, false, false, false];
        break;
    }
    this.setState({ active });
  }

  clickHandler = (number) => {
    var arr = Array(this.state.active.length).fill(false);
    arr[number] = true;
    this.setState({
      expandedNav: false,
      transitionHamburger: "rotate-hamburger",
      active: arr,
    });
  };

  render() {
    const { firebase } = this.props;
    return (
      <AuthUserContext.Consumer>
        {(authUser) => (
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
                    this.setState({
                      clickedHome: true,
                      expandedNav: false,
                      transitionHamburger: this.state.expandedNav
                        ? "rotate-hamburger"
                        : false,
                      active: [true, false, false, false, false, false],
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
                  this.setState({
                    expandedNav: this.state.expandedNav ? false : "expanded",
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
                  {authUser && (
                    <NavigationLink
                      to="/criador"
                      active={this.state.active[1]}
                      clickHandler={() => this.clickHandler(1)}
                      name="Área reservada"
                    ></NavigationLink>
                  )}

                  <NavigationLink
                    to="/noticias"
                    active={this.state.active[2]}
                    clickHandler={() => this.clickHandler(2)}
                    name="Notícias"
                  ></NavigationLink>

                  <NavigationLink
                    to="/artigos"
                    active={this.state.active[3]}
                    clickHandler={() => this.clickHandler(3)}
                    name="Artigos"
                  ></NavigationLink>

                  <NavigationLink
                    to="/galeria"
                    active={this.state.active[4]}
                    clickHandler={() => this.clickHandler(4)}
                    name="Galeria"
                  ></NavigationLink>

                  <NavigationLink
                    to="/apostas"
                    active={this.state.active[5]}
                    clickHandler={() => this.clickHandler(5)}
                    name="Apostas"
                  ></NavigationLink>

                  <NavigationLink
                    to="/doacoes"
                    active={this.state.active[6]}
                    clickHandler={() => this.clickHandler(6)}
                    name="Doar"
                  ></NavigationLink>

                  {authUser && (
                    <Nav.Item className="ml-3 py-lg-3 py-2 px-0 px-lg-3">
                      <Nav.Link
                        className="nav-link text-white"
                        onClick={() => firebase.auth.signOut()}
                      >
                        Logout
                      </Nav.Link>
                    </Nav.Item>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withRouter(withFirebase(NavigationBar));
