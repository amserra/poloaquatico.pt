import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";
import "../style/createNews_Articles.css";
// Firebase
import { AuthUserContext } from "../Session";
import { withFirebase } from "../Firebase";
import { Redirect } from "react-router-dom";

class CreateNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFile: false,
      first: true,
      validated: false,
      uploadFeedback: "",
      filename: "",
      finish: false,
    };

    this.firebase = props.firebase;

    this.title = React.createRef();
    this.content = React.createRef();
  }

  handleSubmit = (event, user) => {
    console.log("handleSubmit");
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (this.state.first && !this.state.hasFile) {
      this.setState({ first: false, validated: true });
    } else if (!this.state.hasFile) {
      this.setState({ validated: true });
    } else {
      // Aqui temos ficheiro
      if (form.checkValidity()) {
        console.log("tudo válido");
        console.log(this.state.filename);
        this.firebase.storage
          .ref("news")
          .child(this.state.filename)
          .getDownloadURL()
          .then((url) => {
            var db = this.firebase.firestore;
            db.collection("news")
              .add({
                author: user.displayName,
                content: this.content.current.value,
                image: url,
                title: this.title.current.value,
                date: this.firebase.fb.firestore.Timestamp.now(),
              })
              .then(() => {
                console.log("criado!!");
                form.reset();
                this.setState({
                  hasFile: false,
                  first: true,
                  validated: false,
                  uploadFeedback: "",
                  filename: "",
                  finish: true,
                });
              });
          });
      } else {
        this.setState({ validated: true });
      }
    }
  };

  handleUploadSuccess = (filename) => {
    this.setState({
      uploadFeedback: "Upload completo!",
      filename: filename,
    });
  };

  render() {
    return (
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser ? (
            <Container
              className="page mt-5"
              style={{ fontFamily: "Sans-Serif" }}
            >
              <h2 className="font-weight-normal text-center">Criar notícia</h2>
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={(e) => this.handleSubmit(e, authUser)}
              >
                <Form.Group controlId="createnews-title">
                  <Form.Label>Título</Form.Label>
                  <Form.Control ref={this.title} required type="text" />
                  <Form.Control.Feedback type="invalid">
                    Introduza um título
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="createnews-file">
                  <Form.Label>Imagem</Form.Label>
                  <p style={{ marginBottom: 0 }}></p>

                  <CustomUploadButton
                    accept="image/*"
                    name="avatar"
                    randomizeFilename
                    metadata={{ cacheControl: "max-age=3600" }}
                    storageRef={this.firebase.storage.ref("news")}
                    onUploadStart={() =>
                      this.setState({
                        hasFile: true,
                        uploadFeedback: "A começar a fazer upload...",
                      })
                    }
                    onUploadError={() =>
                      this.setState({
                        uploadFeedback:
                          "Erro ao fazer upload! Por favor tente outra vez.",
                      })
                    }
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={() =>
                      this.setState({ uploadFeedback: "A fazer upload..." })
                    }
                    style={{
                      backgroundColor: "steelblue",
                      color: "white",
                      padding: 10,
                      borderRadius: 4,
                      cursor: "pointer",
                    }}
                  >
                    Upload
                  </CustomUploadButton>
                  <p
                    style={{
                      marginBottom: this.state.uploadFeedback ? "initial" : 0,
                    }}
                  >
                    {this.state.uploadFeedback}
                  </p>
                  <p style={{ marginBottom: 0 }}></p>
                  <div
                    className="createnews-feedback"
                    style={{
                      display:
                        this.state.hasFile || this.state.first
                          ? "none"
                          : "initial",
                    }}
                  >
                    Introduza uma imagem
                  </div>
                </Form.Group>
                <Form.Group controlId="createnews-text">
                  <Form.Label>Texto</Form.Label>
                  <Form.Control
                    ref={this.content}
                    required
                    as="textarea"
                    rows="15"
                  />
                  <Form.Control.Feedback type="invalid">
                    Introduza um texto
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit">Publicar</Button>
              </Form>

              <Modal
                show={this.state.finish}
                onHide={() => this.setState({ finish: false })}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header
                  closeButton
                  style={{ outline: "none" }}
                ></Modal.Header>
                <Modal.Body>
                  Notícia criada com sucesso. Verifique se está como deseja no
                  menu das notícias.
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    onClick={() => this.setState({ finish: false })}
                  >
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>
            </Container>
          ) : (
            <Redirect to="/"></Redirect>
          )
        }
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(CreateNews);
