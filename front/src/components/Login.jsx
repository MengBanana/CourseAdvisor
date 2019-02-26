import React, { Component } from "react";
//import {Redirect} from "react-router-dom";
import axios from "axios";
import {Alert} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      validInput: null,
      loggedin: null,
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        if (
          this.state.username !== "" &&
          this.state.password !== ""
        ) {
          this.setState({ validInput: true });
        } else {
          this.setState({
            validInput: false
          });
        }
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.validInput) {
      this.verify();
    } else {
      this.setState({
        loggedin: false,
        errors : "Username and password are required."
      });
    }
  }

  verify() {
    axios
      .post("/users/login", {
        data: {
          username: this.state.username,
          password: this.state.password
        }
      })
      .then(() => {
        console.log("Login succeed!");
        this.setState({
          loggedin: true
        });
      })
      .catch(error => {
        console.log("Login Failed!");
        var errorMessage;
        if (error.message.includes(401)){
          errorMessage = "Username or Password not correct.";
        } 
        this.setState({
          loggedin: false,
          errors: errorMessage
        });

      });
  }

  render() {

    const success = (
      <Alert color="success">
        Welcome back, {this.state.username}!
      </Alert>
    );

    const failed = (
      <Alert color="danger">
        Error: {this.state.errors}
      </Alert>
    );

    return (
      <div className="container" style={{fontFamily:"Crete Round"}}>
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              {this.state.loggedin === null? null: this.state.loggedin? success : failed}
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text"><i className="fas fa-user"></i></div>
    </div>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text"><i className="fas fa-unlock-alt"></i></div>
    </div>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                </div>
              </div>
              <button type="submit" className="btn btn-lg btn-info btn-block">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;