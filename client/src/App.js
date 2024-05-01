import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import CustomerMenuPage from "./components/menu/pages/CustomerMenuPage.jsx";
import IntroPage from "./components/intro/IntroPage.jsx";
import LoginPage from "./components/users/pages/LoginPage.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/manager" exact>
          <IntroPage />
        </Route>
        <Route path="/customer/menu" exact>
          <CustomerMenuPage />
        </Route>
        <Route path="/manager/login" exact>
          <LoginPage />
        </Route>
        <Redirect to="/manager" />
      </Switch>
    </Router>
  );
}

export default App;
