import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../style/loginPage.css";
// Firebase
import { Redirect } from "react-router-dom";
import { withFirebase } from "../Firebase";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      validated: false,
      logged: false,
      msgTimeout: false,
      error: null,
    };

    this.email = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    this.setState({ error: null });
    if (form.checkValidity()) {
      console.log("auth");
      this.props.firebase.auth
        .signInWithEmailAndPassword(
          this.email.current.value,
          this.password.current.value
        )
        .then(() => {
          this.setState({ logged: true });
          setTimeout(() => {
            this.setState({ msgTimeout: true });
          }, 2000);
        })
        .catch(({ message }) => {
          this.setState({ error: message });
        });
    }

    this.setState({ validated: true });
  };

  render() {
    if (this.state.msgTimeout) return <Redirect to="/criador"></Redirect>;

    return (
      <Container className="page login-page-container">
        <h2 className="text-center font-weight-normal">Login</h2>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Endereço email</Form.Label>
            <Form.Control
              ref={this.email}
              required
              type="email"
              placeholder="Introduza email"
            />
            <Form.Control.Feedback type="invalid">
              Introduza um email válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={this.password}
              required
              type="password"
              placeholder="Password"
            />
            <Form.Control.Feedback type="invalid">
              Introduza uma password válida.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          {this.state.logged && (
            <Form.Text>
              Login bem sucedido. Será redirecionado dentro de momentos.
            </Form.Text>
          )}
          {this.state.error && <Form.Text>{this.state.error}</Form.Text>}
        </Form>
      </Container>
    );
  }
}

export default withFirebase(LoginPage);
