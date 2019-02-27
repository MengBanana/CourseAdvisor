import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    // reload page?
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" style={{color:"#313a47"}} to="/search">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/register">Register</NavLink>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/search">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/profile">username</NavLink>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{fontFamily:"Gloria Hallelujah"}}>
 <a className="navbar-brand" href="/"><h4>Course Advisor</h4></a>
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            {localStorage.usertoken ? userLink : loginRegLink}
            </div>
            </nav>
          </div>

    );
  }
}