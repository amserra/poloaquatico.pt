import React from "react";

const BestBetters = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="text-uppercase text-center text-secondary">
          Melhores apostadores
        </h2>
        <hr className="star-dark mb-5" />
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <a
              className="d-block mx-auto portfolio-item"
              data-toggle="modal"
              href="#portfolio-modal-1"
            >
              <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              {/* <img
                  className="img-fluid"
                  src="assets/img/portfolio/cabin.png"
                /> */}
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a
              className="d-block mx-auto portfolio-item"
              data-toggle="modal"
              href="#portfolio-modal-2"
            >
              <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              {/* <img
                  className="img-fluid"
                  src="assets/img/portfolio/cake.png"
                /> */}
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a
              className="d-block mx-auto portfolio-item"
              data-toggle="modal"
              href="#portfolio-modal-3"
            >
              <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              {/* <img
                  className="img-fluid"
                  src="assets/img/portfolio/circus.png"
                /> */}
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a
              className="d-block mx-auto portfolio-item"
              data-toggle="modal"
              href="#portfolio-modal-4"
            >
              <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              {/* <img
                  className="img-fluid"
                  src="assets/img/portfolio/game.png"
                /> */}
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a
              className="d-block mx-auto portfolio-item"
              data-toggle="modal"
              href="#portfolio-modal-5"
            >
              <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              {/* <img
                  className="img-fluid"
                  src="assets/img/portfolio/safe.png"
                /> */}
            </a>
          </div>
          <div className="col-md-6 col-lg-4">
            <a
              className="d-block mx-auto portfolio-item"
              data-toggle="modal"
              href="#portfolio-modal-6"
            >
              <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
                <div className="my-auto portfolio-item-caption-content w-100 text-center text-white">
                  <i className="fa fa-search-plus fa-3x" />
                </div>
              </div>
              {/* <img
                  className="img-fluid"
                  src="assets/img/portfolio/submarine.png"
                /> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestBetters;
