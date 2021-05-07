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
        <Route exact path="/" component={main} />
        <Route exact path="/Main" component={main} />

        <Route exact path="/Depo" component={depo} />
        <Route exact path="/Kategori" component={kategori} />
        <Route exact path="/Urun" component={urun} />
        <Route exact path="/Forgot" component={forgot} />
        <Route exact path="/Login" component={login} />
      </Switch>
    </Router>
  );
};

export default App;
