import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "@firebase/app";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { ReactComponent as EditIcon } from "../assets/edit-solid.svg";
import { ReactComponent as DeleteIcon } from "../assets/trash-solid.svg";
// Firebase
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";
import Delete from "../Reserved/DeleteDocument";

class NewsCard extends Component {
  state = { url: null, showModalDelete: false };

  transformDate = (date) => {
    var m;
    switch (date.getMonth()) {
      case 0:
        m = "janeiro";
        break;
      case 1:
        m = "fevereiro";
        break;
      case 2:
        m = "março";
        break;
      case 3:
        m = "abril";
        break;
      case 4:
        m = "maio";
        break;
      case 5:
        m = "junho";
        break;
      case 6:
        m = "julho";
        break;
      case 7:
        m = "agosto";
        break;
      case 8:
        m = "setembro";
        break;
      case 9:
        m = "outubro";
        break;
      case 10:
        m = "novembro";
        break;
      case 11:
        m = "dezembro";
        break;
      default:
        m = "mes invalido";
        break;
    }
    return `${date.getDate()} de ${m} de ${date.getFullYear()}`;
  };

  componentDidMount() {
    this.getImage(this.props.file);
  }

  getImage = (path) => {
    const storage = firebase.storage().refFromURL(path);
    storage.getDownloadURL().then((url) => {
      this.setState({ url });
    });
  };

  render(props) {
    const { title, author, date, content, id, documentId, edited } = this.props;

    return (
      <AuthUserContext.Consumer>
        {(authUser) => (
          <div className="shadow col-sm-12 news-item p-4 m-2 mh-25">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                {this.state.url ? null : (
                  <Spinner
                    animation="border"
                    role="status"
                    className="news-spinner-image"
                  ></Spinner>
                )}
                {/* <img
                  className="img-fluid rounded-lg"
                  id="img-news"
                  style={{
                    maxHeight: 21 + "vh",
                    width: 100 + "%",
                    display: this.state.url ? "initial" : "none",
                  }}
                  src={this.state.url}
                  alt=""
                /> */}
                <Image
                  src={this.state.url}
                  fluid
                  style={{ display: this.state.url ? "initial" : "none" }}
                  className="mx-auto d-block"
                ></Image>
              </div>
              <div className="col">
                <h3 className="name-news">{title}</h3>
                <h6 className="text-secondary" style={{ display: "inline" }}>
                  {author} ·
                </h6>
                <h6
                  className="text-secondary"
                  style={{
                    display: "inline",
                    fontSize: 0.7 + "rem",
                    marginLeft: 0.3 + "rem",
                    fontWeight: 500,
                  }}
                >
                  {this.transformDate(date.toDate())}
                  {edited && " (editado)"}
                </h6>
                <p className="news-description">{content}</p>
                <Link
                  to={{
                    pathname: "/noticias/" + id,
                    state: {
                      title,
                      author,
                      date: this.transformDate(date.toDate()),
                      content,
                      url: this.state.url,
                    },
                  }}
                >
                  <button type="button" className="btn btn-primary mt-3">
                    Ler mais
                  </button>
                </Link>
                {authUser
                  ? authUser.displayName === author && (
                      <Link
                        to={{
                          pathname: "/criador/editarNoticia",
                          state: {
                            title,
                            content,
                            url: this.state.url,
                            documentId,
                          },
                        }}
                      >
                        <EditIcon className="ml-3 pt-3" width="20"></EditIcon>
                      </Link>
                    )
                  : null}
                {authUser
                  ? authUser.displayName === author && (
                      <Button
                        onClick={() => this.setState({ showModalDelete: true })}
                        variant="link"
                        style={{ borderWidth: 0, padding: 0 }}
                      >
                        <DeleteIcon
                          className="ml-3 pt-3"
                          width="15"
                        ></DeleteIcon>
                      </Button>
                    )
                  : null}
                <Delete
                  show={this.state.showModalDelete}
                  handleClose={() => this.setState({ showModalDelete: false })}
                  msg={`Tem a certeza que quer eliminar esta notícia com o título "${title}" ?`}
                  collection="news"
                  documentId={documentId}
                  url={this.state.url}
                ></Delete>
              </div>
            </div>
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(NewsCard);
