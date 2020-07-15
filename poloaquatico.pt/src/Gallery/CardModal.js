import React from "react";

const CardModal = (props) => {
  return (
    <div
      className="modal text-center"
      role="dialog"
      tabIndex="-1"
      id={`modal-${props.number}`}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              id="close-modal"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <img
                    className="img-fluid mb-5"
                    src={props.file}
                    alt={props.alt}
                  />
                  <p className="mb-5">Descrição(autor, etc)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
