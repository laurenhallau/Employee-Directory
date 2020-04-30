import React from "react";
import { Jumbotron } from "reactstrap";
import "./style.css";

function Title() {
    return (
        <div>
          <Jumbotron classname="jumbotron">
              <h1 classname="title">Employee Directory</h1>
              <p classname="lead">Search for an employee</p>
          </Jumbotron>
        </div>
    );   
}

export default Title;