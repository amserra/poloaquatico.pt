import React from "react";
import CardModal from "./CardModal";

const Card = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <a
        className="d-block mx-auto portfolio-item"
        data-toggle="modal"
        href={`#modal-${props.number}`}
      >
        <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
          <div className="my-auto portfolio-item-caption-content w-100 text-center text-white">
            <i className="fa fa-search-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={props.file} alt={props.alt}></img>
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
