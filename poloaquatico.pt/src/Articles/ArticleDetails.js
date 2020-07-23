import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";

const ArticleDetails = (props) => {
  if (props.location.state) {
    const { title, author, date, content, url } = props.location.state;

    var text = content;

    const slice = (number) => {
      if (number === 1) {
        if (content.length < 500) return text;
        else {
          const index = text.indexOf(". ", 500) + 2;
          const v = text.substr(0, index);
          text = text.substr(index, text.length);
          return v;
        }
      } else if (number === 2) {
        if (content.length > 500) {
          const half = text.length / 2;
          const index = text.indexOf(". ", half) + 2;
          const v = text.substr(0, index);
          text = text.substr(index, text.length);
          return v;
        }
      } else if (number === 3) {
        if (content.length > 500) {
          return text;
        }
      }
    };

    return (
      <Container className="mt-5 page">
        <h1 className="text-break font-weight-normal text-center">{title}</h1>
        <h6
          style={{ fontSize: 1.5 + "vh" }}
          className="mt-3 text-center text-break font-weight-lighter"
        >
          Por {author} a {date}
        </h6>
        <Row className="mt-5">
          <Col lg={5}>
            <img
              className="img-fluid rounded-lg mx-auto d-block pl-2 pr-2 pb-2"
              src={url}
              alt=""
            ></img>
          </Col>
          <Col lg={7} className="mt-4">
            <p className="text-break font-weight-normal text-left">
              {slice(1)}
            </p>
          </Col>
        </Row>
        <Row className="mt-xl-4 mt-2">
          <Col xs={12} md={6}>
            <p className="text-break font-weight-normal text-left">
              {slice(2)}
            </p>
          </Col>
          <Col>
            <p className="text-break font-weight-normal text-left">
              {slice(3)}
            </p>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <Redirect to="/"></Redirect>;
  }
};

export default ArticleDetails;
