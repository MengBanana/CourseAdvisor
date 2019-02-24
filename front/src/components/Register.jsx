import React, { Component } from "react";
import axios from "axios";
import {Alert} from "reactstrap";
//import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: "",
      bio: "",
      image: "",
      validInput: null,
      registered: null,
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
      this.addToDB();
    } else {
      this.setState({
        registered: false,
        errors : "Username and password are required."
      });
    }
    //<Redirect to="/search" />;
  }  

  addToDB() {
    axios
      .post("/users/register", {
        data: {
          username: this.state.username,
          password: this.state.password,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          bio: this.state.bio
        }
      })
      .then(() => {
        console.log("Registered!");
        this.setState({
          registered: true
        });
      })
      .catch(error => {
        console.log("Registered Failed!");
        var errorMessage;
        if (error.message.includes(401)){
          errorMessage = "Username or Password not correct.";
        } else if (error.message.includes(409)) {
          errorMessage = "User already exists.";
        }
        this.setState({
          registered: false,
          errors: errorMessage
        });

      });
  }

  render() {
    var success = (
      <Alert color="success">
        Registered!
      </Alert>
    );

    var failed = (
      <Alert color="danger">
        Error: {this.state.errors}
      </Alert>
      
    );

    var info = (
      <Alert color="light">
        * username and password are required *
      </Alert>
    );
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">
                  Register
              </h1>
              {this.state.registered === null ? info : (this.state.registered ? success: failed)}
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
                  onChange={this.onChange}
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
                  onChange={this.onChange}
                />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="your last name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>  
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text"><i className="fas fa-envelope"></i></div>
    </div>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="E-mail address"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div> 
              </div> 
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
      <div className="input-group-text"><i className="fas fa-user-graduate"></i></div>
    </div>
                <input
                  type="text"
                  className="form-control"
                  name="bio"
                  placeholder="eg. 2018 Spring Align Student"
                  value={this.state.bio}
                  onChange={this.onChange}
                />
              </div> 
              </div> 
              
              <button
                type="submit"
                className="btn btn-lg btn-info btn-block"
              >
                  Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
