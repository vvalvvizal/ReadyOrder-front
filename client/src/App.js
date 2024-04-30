import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MenuPage from "./components/menu/MenuPage.jsx";
import IntroPage from "./components/intro/IntroPage.jsx";
import LoginPage from "./components/login/LoginPage.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <IntroPage />
        </Route>
        <Route path="/menu" exact>
          <MenuPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
