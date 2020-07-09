import React from "react";

const CardModal = (props) => {
  return (
    <div
      class="modal text-center"
      role="dialog"
      tabindex="-1"
      id={`modal-${props.number}`}
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              id="close-modal"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container text-center">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <img
                    class="img-fluid mb-5"
                    src={props.file}
                    alt={props.alt}
                  />
                  <p class="mb-5">Descrição(autor, etc)</p>
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
