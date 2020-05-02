import React from "react";
import "./style.css";
// import { Card, CardImg, CardTitle, Row, Col, CardText } from "reactstrap";

function EmployeeCard(props) {
  
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                <li>
                  <strong>Name:</strong> {props.name} 
                </li> 
                <li>
                  <strong>Position:</strong> {props.position}
                </li>
                <li>
                  <strong>Date of Birth:</strong> {props.birth}
                </li>
                <li>
                  <strong>Country:</strong> {props.country}
                </li>
                </ul>
            </div>
        </div>
    )
}

export default EmployeeCard;