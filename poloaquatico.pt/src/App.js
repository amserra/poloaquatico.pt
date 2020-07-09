import React from "react";
import HomePage from "./HomePage/HomePage";
import NavigationBar from "./Layout/NavigationBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Articles from "./Articles/Articles";
import News from "./News/News";
import Gallery from "./Gallery/Gallery";
import Bets from "./Bets/Bets";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/noticias" component={News}></Route>
        <Route exact path="/artigos" component={Articles}></Route>
        <Route exact path="/galeria" component={Gallery}></Route>
        <Route exact path="/apostas" component={Bets}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
