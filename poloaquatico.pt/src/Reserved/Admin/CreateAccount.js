import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "../../style/loginPage.css";
// Firebase
import { withFirebase } from "../../Firebase";
import { AuthUserContext } from "../../Session";

// CRIAR UM UTILIZADOR NOVO FAZ LOGIN DELE AUTOMATICAMENTE

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      registered: false,
      error: null,
    };

    this.firebase = props.firebase;

    this.name = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      this.firebase.auth
        .createUserWithEmailAndPassword(
          this.email.current.value,
          this.password.current.value
        )
        .then((user) => {
          console.log(user);
          user.user
            .updateProfile({
              displayName: this.name.current.value,
            })
            .then((u) => {
              this.setState({ registered: true });
            })
            .catch(({ message }) => this.setState({ error: message }));
        })
        .catch(({ message }) => this.setState({ error: message }));
    }

    this.setState({ validated: true });
  };

  render() {
    if (this.state.registered) return <Redirect to="/criador"></Redirect>;

    return (
      <AuthUserContext.Consumer>
        {(authUser) => {
          if (!authUser || authUser.displayName !== "admin")
            return <Redirect to="/"></Redirect>;
          return (
            <Container className="page login-page-container">
              <h2 className="text-center font-weight-normal">Criar conta</h2>
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.handleSubmit}
              >
                <Form.Group controlId="formBasicName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    ref={this.name}
                    required
                    type="text"
                    placeholder="Introduza o nome"
                  />
                  <Form.Control.Feedback type="invalid">
                    Introduza um nome válido.
                  </Form.Control.Feedback>
                </Form.Group>

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
                  Registar
                </Button>
              </Form>
            </Container>
          );
        }}
      </AuthUserContext.Consumer>
    );
  }
}

export default withFirebase(CreateAccount);
