import React, { Component } from "react";



const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "right",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
};

export default class Footer extends Component {
  render() {
    return <footer style={style}> by MengBanana & YHuangxu</footer>;
  }
}
