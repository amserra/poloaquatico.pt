import React from "react";

const NavigationBar = () => {
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg fixed-top bg-secondary text-uppercase"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          Brand
        </a>
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
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#portfolio"
              >
                Notícias
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1" role="presentation">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#portfolio"
              >
                Artigos
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1" role="presentation">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#about"
              >
                Galeria
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1" role="presentation">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#contact"
              >
                Apostas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
