import React from "react";
//import "./style.css";

function EmployeeCard(props) {
    console.log("employeecard", props);
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                <li>Name: {props.name} </li> 
                <li>Position: {props.position} </li>
                <li>Date of Birth: {props.birth} </li>
                <li>Country: {props.country}</li>
                </ul>
            </div>
        </div>
    )
}

export default EmployeeCard;