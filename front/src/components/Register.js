import React, { Component } from "react";
import axios from "axios";
import {Alert} from "reactstrap";
import { Redirect } from "react-router-dom";

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
      errors: {},
      registered: null
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
          this.state.username !== undefined &&
          this.state.username !== null &&
          this.state.password !== undefined &&
          this.state.password !== null
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
      .then((res) => {
        console.log("Registered!");
        this.setState({
          registered: true
        });
      })
      .catch(error => {
        console.log("Registered Failed!");
        this.setState({
          registered: false
        });
      });
  }

  render() {
    const success = (
      <Alert color="success">
        Registered!
      </Alert>
    );

    const failed = (
      <Alert color="danger">
        Register failed! Error: + {this.state.errors.message}
      </Alert>
      
    );

    const info = (
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
              {this.state.registered == null ? info: (this.state.registered ? success: failed)}
              <div className="form-group">
                <label htmlFor="username">Username</label>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="first_name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="enter your first name"
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
                  placeholder="enter your last name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>  
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="enter your E-mail"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>  
              <div className="form-group">
                <label htmlFor="bio">Bio</label>
                <input
                  type="text"
                  className="form-control"
                  name="bio"
                  placeholder="enter your bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                />
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
