import React, { Component } from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Comment from "./components/Comment";



export default class App extends Component {
  render(){
    return (
      <div style={{fontFamily:"Noto Sans"}}>
        <Navbar />
        <div className = "container">
          <Switch>  
            <Route path = "/register" component = {Register} />
            <Route path = "/login" component = {Login} />
            <Route path = "/profile" component = {Profile} />
            <Route path = "/search" component = {Search} />
            <Route path = "/comment/:courseId/:professor" component = {Comment} />
            <Route exact path = "/" component = {Landing}/>
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
