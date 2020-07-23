import React from "react";
import Modal from "react-bootstrap/Modal";

const CardModal = (props) => {
  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title className="gallery-modal-title">
          {props.description}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="img-fluid rounded-lg mx-auto d-block"
          src={props.file}
          alt=""
        />
      </Modal.Body>
      <Modal.Footer
        className="gallery-modal-footer"
        style={{ paddingTop: 0 }}
      >{`Enviada por ${props.author} a ${props.date}`}</Modal.Footer>
    </Modal>
  );
};

export default CardModal;
