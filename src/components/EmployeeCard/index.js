import React from "react";
import { Card, CardImg, CardTitle, Row, Col, CardText } from "reactstrap";
//import "./style.css";


function EmployeeCard(props) {
    return (
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>{props.name}</CardTitle>
              <CardImg top width="100%" src={props.image} />
              <CardText><ul>
              <li>Name: {props.name} </li> 
              <li>Position: {props.position} </li>
              <li>Date of Birth: {props.birth} </li>
              <li>Country: {props.country}</li>
              </ul></CardText>
            </Card>
          </Col>
        </Row>
      );
    };

// function EmployeeCard(props) {
//     console.log("employeecard", props);
//     return (
//         <div className="card">
//             <div className="img-container">
//                 <img alt={props.name} src={props.image} />
//             </div>
//             <div className="content">
//                 <ul>
//                 <li>Name: {props.name} </li> 
//                 <li>Position: {props.position} </li>
//                 <li>Date of Birth: {props.birth} </li>
//                 <li>Country: {props.country}</li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

export default EmployeeCard;