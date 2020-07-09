import React from "react";
import CardModal from "./CardModal";

const Card = (props) => {
  return (
    <div class="col-md-6 col-lg-4">
      <a
        class="d-block mx-auto portfolio-item"
        data-toggle="modal"
        href={`#modal-${props.number}`}
      >
        <div class="d-flex portfolio-item-caption position-absolute h-100 w-100">
          <div class="my-auto portfolio-item-caption-content w-100 text-center text-white">
            <i class="fa fa-search-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src={props.file} alt={props.alt}></img>
      </a>
      <CardModal
        file={props.file}
        alt={props.alt}
        number={props.number}
      ></CardModal>
    </div>
  );
};

export default Card;
