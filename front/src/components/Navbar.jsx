import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    // reload page?
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Home
          </Link>
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
                <Link to="/" className="nav-link">
                  <h4>Course Adviser</h4>
                </Link>
              </li>
            </ul>
            {localStorage.usertoken ? userLink : loginRegLink}
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(NavBar);