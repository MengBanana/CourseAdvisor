import React, { Component } from "react";
import jwt_decode from "jwt-decode";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      bio: "",
      errors: {},
    };
  }

/*  componentDidMount() {
    const token = localStorage.usertoken;
    const decode = jwt_decode(token);
    // const comments = getComments();
    this.setState({
      username: decode.username,
      first_name: decode.first_name,
      last_name: decode.last_name,
      email: decode.email,
      bio: decode.bio,
      // comments:comments
    });
  }*/

  render() {
    return (
      <div className="container" style={{fontFamily:"Noto Sans"}}>
        <div className="jumbotron mt-5 bg-warning">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center"> PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>UserName</td>
                <td>{this.state.username}</td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
