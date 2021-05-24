import { useReducer, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import React, { Component } from "react";
import depo from "./components/depo/Depo";
import kategori from "./components/kategori/Kategori";
import urun from "./components/urun/Urun";
import login from "./components/login/Login";
import forgot from "./components/forgot/Forgot";
import main from "./components/main/Main";

const App = () => {
  let [auth, setAuth] = React.useState(
    localStorage.getItem("user") ? true : false
  );

  const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <Switch component={App}>
        <GuardedRoute exact path="/" component={main} auth={auth} />
        <GuardedRoute exact path="/Main" component={main} auth={auth} />
        <GuardedRoute exact path="/Depo" component={depo} auth={auth} />
        <GuardedRoute exact path="/Kategori" component={kategori} auth={auth} />
        <GuardedRoute exact path="/Urun" component={urun} auth={auth} />
        <GuardedRoute exact path="/Forgot" component={forgot} auth={!auth} />
        <GuardedRoute exact path="/Login" component={login} auth={auth} />
      </Switch>
    </Router>
  );
};

export default App;
