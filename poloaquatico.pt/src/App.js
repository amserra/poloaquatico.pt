import React, { Component } from "react";
import HomePage from "./HomePage/HomePage";
import NavigationBar from "./Layout/NavigationBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Articles from "./Articles/Articles";
import ArticleDetails from "./Articles/ArticleDetails";
import News from "./News/News";
import NewsDetails from "./News/NewsDetails";
import Gallery from "./Gallery/Gallery";
import Bets from "./Bets/Bets";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
