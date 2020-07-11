import React from "react";

const NewsCard = (props) => {
  return (
    <div class="shadow col-sm-12 news-item p-4 m-2 mh-25">
      <div class="row">
        <div class="col-lg-4 col-md-5">
          <img
            class="img-fluid rounded-lg"
            id="img-news"
            style={{ maxHeight: 18 + "vh" }}
            src={props.file}
            alt={props.alt}
          />
        </div>
        <div class="col">
          <h3 class="name-news">Título noticia</h3>
          <h6 class="text-secondary">Autor</h6>
          <p class="news-description">
            Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
            Praesent aliquam in tellus eu gravida. Aenean tortor Aenean tortor
            est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam
            in tellus eu gravida. Aenean tortor overflow: hidden; text-overflow:
            ellipsis; display: -webkit-box; -webkit-line-clamp: 2; /* number of
            lines to show */ -webkit-box-orient: vertical; asdasd
          </p>
          <button type="button" className="btn btn-primary mt-3">
            Ler mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
