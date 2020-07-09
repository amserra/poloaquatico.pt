import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";

class NavigationBar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav
        className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase"
        id="mainNav"
      >
        <div className="container">
          <Link to="/" className="navbar-brand js-scroll-trigger">
            <Logo
              onClick={() => this.setState({ clicked: true })}
              onTransitionEnd={() => this.setState({ clicked: false })}
              width="50"
              height="50"
              className="img-fluid"
              id={this.state.clicked ? "navbar-logo" : ""}
            ></Logo>
          </Link>

          <button
            data-toggle="collapse"
            data-target="#navbarResponsive"
            className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item mx-0 mx-lg-1" role="presentation">
                <Link
                  to="/noticias"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  Notícias
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1" role="presentation">
                <Link
                  to="/artigos"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  Artigos
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1" role="presentation">
                <Link
                  to="/galeria"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  Galeria
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-1" role="presentation">
                <Link
                  to="/apostas"
                  className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                >
                  Apostas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavigationBar;
