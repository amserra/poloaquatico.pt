import React from "react";
import cake from "../assets/img/portfolio/cake.png";

import "../style/news.css";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="news-horizontal mt-5">
      <div className="container">
        <div className="row news">
          <NewsCard file={cake} alt="cake"></NewsCard>
          <NewsCard file={cake} alt="cake"></NewsCard>
          <NewsCard file={cake} alt="cake"></NewsCard>
          <NewsCard file={cake} alt="cake"></NewsCard>
        </div>
      </div>
      {/* <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabindex="-1" aria-disabled="true">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default News;
