import React from "react";

const ArticleCard = (props) => {
  return (
    <div class="col-sm-6 col-lg-4 articles-item">
      <img class="img-fluid articles-img" src={props.file} alt={props.alt} />
      <h3 class="articles-name">Project Name</h3>
      <p class="articles-description">
        Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
        Praesent aliquam in tellus eu gravida. Aliquam varius finibus est,
        interdum justo suscipit id.
      </p>
      <button type="button" className="btn btn-primary mt-3">
        Ler mais
      </button>
    </div>
  );
};

export default ArticleCard;
