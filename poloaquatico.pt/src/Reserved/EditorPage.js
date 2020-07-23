import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, Redirect } from "react-router-dom";
import { AuthUserContext } from "../Session";

const EditorPage = (props) => {
  return (
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <Container className="page mt-5">
            <h2 className="text-center font-weight-normal">
              Olá, {authUser.displayName}
            </h2>
            <Row className="justify-content-md-center text-center">
              <Col xs lg="2" className="mt-5">
                <Link to="/criador/criarNoticia">
                  <Button>Criar notícia</Button>
                </Link>
              </Col>
              <Col xs lg="2" className="mt-5">
                <Link to="/criador/criarArtigo">
                  <Button>Criar artigo</Button>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-md-center text-center">
              <Col xs lg="2" className="mt-5">
                <Button>Editar notícia</Button>
              </Col>
              <Col xs lg="2" className="mt-5">
                <Link to="/artigos">
                  <Button>Editar artigo</Button>
                </Link>
              </Col>
            </Row>
            {authUser.displayName === "admin" && (
              <Row className="justify-content-md-center text-center">
                <Col xs lg="2" className="mt-5">
                  <Link to="/criarConta">
                    <Button>Criar conta</Button>
                  </Link>
                </Col>
              </Row>
            )}
          </Container>
        ) : (
          <Redirect to="/"></Redirect>
        )
      }
    </AuthUserContext.Consumer>
  );
};

export default EditorPage;
