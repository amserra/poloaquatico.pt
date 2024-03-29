import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "jquery/dist/jquery";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap";
import "./style/bootstrap/bootstrap.min.css";
import "./style/main.css";
import "./style/transitions.css";
import Firebase, { FirebaseContext } from "./Firebase";

ReactDOM.render(
  // <React.StrictMode>
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
