import React from "react";
import ArticleCard from "./ArticleCard";
import cake from "../assets/img/portfolio/cake.png";
import "../style/articles.css";

const Articles = () => {
  return (
    <div class="articles-clean mt-5">
      <div class="container">
        <div class="row articles">
          <ArticleCard file={cake} alt="cake"></ArticleCard>
          <ArticleCard file={cake} alt="cake"></ArticleCard>
          <ArticleCard file={cake} alt="cake"></ArticleCard>
          <ArticleCard file={cake} alt="cake"></ArticleCard>
        </div>
      </div>
    </div>
  );
};

export default Articles;
