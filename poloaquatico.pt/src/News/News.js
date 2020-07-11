import React from "react";
import cake from "../assets/img/portfolio/cake.png";

import "../style/news.css";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div class="news-horizontal mt-5">
      <div class="container">
        <div class="row news">
          <NewsCard file={cake} alt="cake"></NewsCard>
          <NewsCard file={cake} alt="cake"></NewsCard>
          <NewsCard file={cake} alt="cake"></NewsCard>
          <NewsCard file={cake} alt="cake"></NewsCard>
        </div>
      </div>
      {/* <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
            Previous
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default News;
