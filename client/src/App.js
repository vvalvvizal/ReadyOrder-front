import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MenuPage from "./components/menu/pages/MenuPage.jsx";
import IntroPage from "./components/intro/IntroPage.jsx";
import CartPage from "./components/order/pages/CartPage.jsx";
import LoginPage from "./components/users/pages/LoginPage.jsx";
import ManagementPage from "./components/store/pages/management/ManagementPage.jsx";
import ManagementMenuPage from "./components/store/pages/management/ManagementMenuPage.jsx";
import QRPage from "./components/store/pages/qr/QRPage.jsx";
import ManagementStatePage from "./components/store/pages/management/ManagementStatePage.jsx";
import RecipePage from "./components/order/pages/RecipePage.jsx";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); //3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {showIntro ? (
            <IntroPage />
          ) : isLoggedIn ? (
            <Redirect to="/main" />
          ) : (
            <Redirect to="/authenticate" />
          )}
        </Route>
        <Route path="/authenticate" exact>
          <LoginPage />
        </Route>
        <Route path="/main">
          <ManagementPage />
        </Route>
        <Route path="/store/state" exact>
          <ManagementStatePage />
        </Route>
        <Route path="/store/menu" exact>
          <ManagementMenuPage />
        </Route>
        <Route path="/store/qr" exact>
          <QRPage />
        </Route>

        <Route path="/order/menu" exact>
          <MenuPage />
        </Route>
        <Route path="/order/recipe" exact>
          <RecipePage />
        </Route>
        <Route path="/order/cart" exact>
          <CartPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
