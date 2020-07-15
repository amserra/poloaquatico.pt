import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "@firebase/app";
import "@firebase/storage";
import { Spinner } from "react-bootstrap";

class NewsCard extends Component {
  state = { url: null };

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
    const { title, author, date, content, id } = this.props;

    return (
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
            <img
              className="img-fluid rounded-lg"
              id="img-news"
              style={{
                maxHeight: 18 + "vh",
                display: this.state.url ? "initial" : "none",
              }}
              src={this.state.url}
              alt=""
            />
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
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
