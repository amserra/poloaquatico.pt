import React from "react";

const NewsLoadingCard = () => {
  return (
    <div>
      <div className="shadow col-sm-12 news-item p-4 m-2 mh-25">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <img
              className="img-fluid rounded-lg"
              id="img-news"
              style={{ maxHeight: 18 + "vh" }}
              src="//:0"
              alt=""
            />
          </div>
          <div className="col">
            <h3 className="name-news">asda</h3>
            <h6 className="text-secondary" style={{ display: "inline" }}>
              sasdas
            </h6>
            <h6
              className="text-secondary"
              style={{
                display: "inline",
                fontSize: 0.7 + "rem",
                marginLeft: 0.8 + "rem",
                fontWeight: 500,
              }}
            >
              asda
            </h6>
            <p className="news-description">asdas</p>
            <button type="button" className="btn btn-primary mt-3">
              Ler mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLoadingCard;
