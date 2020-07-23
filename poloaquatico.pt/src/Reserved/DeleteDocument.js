import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { withFirebase } from "../Firebase";

const Delete = (props) => {
  const {
    firebase,
    show,
    handleClose,
    msg,
    documentId,
    collection,
    url,
  } = props;

  const deleteDoc = () => {
    firebase.firestore
      .collection(collection)
      .doc(documentId)
      .delete()
      .then(() => {
        handleClose();
        const ref = firebase.storage.refFromURL(url);
        ref
          .delete()
          .catch((e) => console.log("error deleting from storage", e));
      })
      .catch((e) => console.log("error deleting doc", e));
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Body>{msg}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Não
        </Button>
        <Button variant="primary" onClick={deleteDoc}>
          Sim
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default withFirebase(Delete);
