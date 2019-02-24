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
      <ul className="navbar-nav">
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
          <NavLink className="nav-link" activeClassName="active" to="/search">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/profile">User</NavLink>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="collapse navbar-collapse justify-content-md-center">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <h4>Course Adviser</h4>
                </NavLink>
              </li>
            </ul>
            {localStorage.usertoken ? userLink : loginRegLink}
          </div>
        </nav>
      </div>
    );
  }
}