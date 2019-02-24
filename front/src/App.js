import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./components/NavBar";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Comment from "./components/Comment";
import "./App.css";


export default class App extends Component {
render(){
return (
<div className = "container">
  <Navbar />
  <div className = "container">
    <Switch>  
      <Route path = "/register" component = {Register} />
      <Route path = "/login" component = {Login} />
      <Route path = "/profile" component = {Profile} />
      <Route path = "/search" component = {Search} />
      <Route path = "/comment:course?professor?" component = {Comment} />
      <Route exact path = "/" component = {Landing}/>
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
  <div>
  <Footer />
  </div>
</div>
);
}
}
