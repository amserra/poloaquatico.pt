import React, { Component } from "react";
import HomePage from "./HomePage/HomePage";
import NavigationBar from "./Layout/NavigationBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Articles from "./Articles";
import ArticleDetails from "./Articles/ArticleDetails";
import News from "./News";
import NewsDetails from "./News/NewsDetails";
import Gallery from "./Gallery/Gallery";
import Bets from "./Bets/Bets";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Page404 from "./Layout/Page404";
import Donations from "./Donations";
import SuccessDonation from "./Donations/SuccessDonation";
import CreateArticle from "./Reserved/CreateArticle";
import CreateNews from "./Reserved/CreateNews";
import LoginPage from "./Auth/LoginPage";
import EditorPage from "./Reserved/EditorPage";
import EditArticle from "./Reserved/EditArticle";
import CreateAccount from "./Reserved/Admin/CreateAccount";
import { withAuthentication } from "./Session";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar></NavigationBar>

        {/* Route without specifying any route will render all the time */}
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={HomePage}></Route>
                  <Route
                    exact
                    path="/noticias/:id"
                    component={NewsDetails}
                  ></Route>
                  <Route
                    exact
                    path="/artigos/:id"
                    component={ArticleDetails}
                  ></Route>
                  <Route exact path="/noticias" component={News}></Route>
                  <Route exact path="/artigos" component={Articles}></Route>
                  <Route exact path="/galeria" component={Gallery}></Route>
                  <Route exact path="/apostas" component={Bets}></Route>
                  <Route exact path="/doacoes" component={Donations}></Route>
                  <Route
                    exact
                    path="/doacoes/completa"
                    component={SuccessDonation}
                  ></Route>
                  <Route exact path="/criador" component={EditorPage}></Route>
                  <Route
                    exact
                    path="/criador/criarNoticia"
                    component={CreateNews}
                  ></Route>
                  <Route
                    exact
                    path="/criador/criarArtigo"
                    component={CreateArticle}
                  ></Route>
                  <Route
                    exact
                    path="/criador/editarArtigo"
                    component={EditArticle}
                  ></Route>
                  <Route exact path="/login" component={LoginPage}></Route>
                  <Route
                    exact
                    path="/criarConta"
                    component={CreateAccount}
                  ></Route>
                  <Route path="*" component={Page404}></Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default withAuthentication(App);
