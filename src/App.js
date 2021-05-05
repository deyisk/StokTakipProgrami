import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import depo from "./components/depo/Depo";
import kategori from "./components/kategori/Kategori";
import urun from "./components/urun/Urun";
import login from "./components/login/Login";
import forgot from "./components/forgot/Forgot";
//test changes
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
        <Route exact path="/" component={Main} />
        <Route exact path="/Depo" component={depo} />
        <Route exact path="/Kategori" component={kategori} />
        <Route exact path="/Urun" component={urun} />
        <Route exact path="/Login" component={login} />
        <Route exact path="/Forgot" component={forgot} />
      </Switch>
    </Router>
  );
};

export default App;
