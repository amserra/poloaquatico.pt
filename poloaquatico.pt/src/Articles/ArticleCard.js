import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { ReactComponent as EditIcon } from "../assets/edit-solid.svg";
// Firebase
import { withFirebase } from "../Firebase";
import { AuthUserContext } from "../Session";

class ArticleCard extends Component {
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
    const storage = this.props.firebase.storage.refFromURL(path);
    storage.getDownloadURL().then((url) => {
      this.setState({ url });
    });
  };
  render() {
    const { title, author, date, content, id } = this.props;

    return (
      <AuthUserContext.Consumer>
        {(authUser) => (
          <div className="col-sm-6 col-lg-4 articles-item">
            {this.state.url ? null : (
              <Spinner
                animation="border"
                role="status"
                className="news-spinner-image"
              ></Spinner>
            )}
            <img
              className="img-fluid rounded-lg articles-img"
              id="img-news"
              style={{
                display: this.state.url ? "initial" : "none",
                width: 100 + "%",
                height: 50 + "%",
              }}
              src={this.state.url}
              alt=""
            />
            <h3 className="articles-name">{title}</h3>
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
            <p className="articles-description">{content}</p>
            <Link
              to={{
                pathname: "/artigos/" + id,
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
                      pathname: "/criador/editarArtigo",
                      state: { title, content, url: this.state.url },
                    }}
                  >
                    <EditIcon className="ml-3 pt-3" width="20"></EditIcon>
                  </Link>
                )
              : null}
          </div>
        )}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(ArticleCard);
