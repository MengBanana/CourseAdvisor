import React from "react";
import { Jumbotron, Container, Row } from "reactstrap";
import "./style.css";

const Landing = () => {
  return (
    <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Welcome!</h1>
        <p className="lead" >This is a course & professor rating site for NEU-SV students</p>
      </Container>
      <Row>
        {    <img src={require("./neu.jpg") } alt="NEU" />}
      </Row>
    </Jumbotron>
  );
};

export default Landing;