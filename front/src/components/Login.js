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
      loggedin: false,
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
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

  onSubmit(e) {
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
        Welcome back {this.state.username}!
      </Alert>
    );

    const failed = (
      <Alert color="danger">
        Error: {this.state.errors}
      </Alert>
    );

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              {this.state.loggedin?success:failed}
              <div className="form-group">
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="enter username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">password</label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
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