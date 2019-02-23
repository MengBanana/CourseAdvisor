import React, { Component } from "react";
import { login } from "./userFunctions";
import {Redirect} from "react-router-dom";
import Search from "./Search.js";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    };

    login(user).then(res => {
      if (res) {
        return (<Redirect to={Search} />);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 calssName="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="username">username</label>
                <input
                  type="username"
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
                  type="password"
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