import React, { Component } from "react";
import CardModal from "./CardModal";
import Spinner from "react-bootstrap/Spinner";
// Firebase
import firebase from "@firebase/app";

class GalleryCard extends Component {
  state = { url: null, modalShow: false };

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
    storage
      .getDownloadURL()
      .then((url) => {
        this.setState({ url });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { author, date, description } = this.props;

    return (
      <div className="col-md-6 col-lg-4">
        <a
          className="d-block mx-auto portfolio-item"
          data-toggle="modal"
          href="#modal"
          onClick={() => this.setState({ modalShow: true })}
        >
          <div className="d-flex portfolio-item-caption position-absolute h-100 w-100">
            <div className="my-auto portfolio-item-caption-content w-100 text-center text-white">
              <i className="fa fa-search-plus fa-3x"></i>
            </div>
          </div>
          {this.state.url ? null : (
            <Spinner
              animation="border"
              role="status"
              className="gallery-spinner-image"
            ></Spinner>
          )}
          <img
            className="img-fluid rounded-lg"
            style={{
              display: this.state.url ? "initial" : "none",
            }}
            src={this.state.url}
            alt=""
          ></img>
        </a>
        <CardModal
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
          file={this.state.url}
          description={description}
          date={this.transformDate(date.toDate())}
          author={author}
        ></CardModal>
      </div>
    );
  }
}

export default GalleryCard;
