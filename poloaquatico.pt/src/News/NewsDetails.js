import React from "react";
import { Container } from "react-bootstrap";

const NewsDetails = (props) => {
  const { title, author, date, content, url } = props.location.state;
  return (
    <Container className="mt-5 page">
      <img
        className="img-fluid rounded-lg mx-auto d-block"
        style={{ maxWidth: 80 + "vw", maxHeight: 35 + "vh" }}
        src={url}
        alt=""
      ></img>
      <h1 className="mt-4 text-center text-break font-weight-normal">
        {title}
      </h1>
      <h6
        style={{ fontSize: 1.5 + "vh" }}
        className="mt-3 text-center text-break font-weight-lighter"
      >
        Por {author} a {date}
      </h6>
      <p className="mt-5">{content}</p>
    </Container>
  );
};

export default NewsDetails;
