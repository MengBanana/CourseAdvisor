import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Search from "./components/Search";
import "./App.css";


export default class App extends Component {
  render(){
    return (
      <Router>
        <div className = "App">
          
          <Navbar />
          <Route exact path = "/" component = {Landing}/>

            
          <div className = "container">
            <Route  path = "/register" component = {Register} />
            <Route  path = "/login" component = {Login} />
            <Route  path = "/profile" component = {Profile} />
            <Route  path = "/search" component = {Search} />
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}
