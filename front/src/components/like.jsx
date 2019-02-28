/* eslint react/prop-types: 0 */
import React, { Component } from "react";

class Like extends Component {
  render() {
    if (!this.props.liked) 
      return (
        <i className="far fa-heart" style={{cursor: "pointer"}} onClick={this.props.onClick}></i>
      );
    return (<i className="fas fa-heart" style={{cursor: "pointer"}} onClick={this.props.onClick}></i>);
  }
}

export default Like;
