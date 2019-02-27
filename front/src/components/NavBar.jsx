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

/*      <nav style={{fontFamily:"Gloria Hallelujah"}} className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>*/
    );
  }
}