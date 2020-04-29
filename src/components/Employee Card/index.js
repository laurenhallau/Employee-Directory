import React from "react";
//import "./style.css";

function EmployeeCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.image} />
            </div>
            <div className="content">
                <ul>
                <li>Name: {props.name} </li> 
                <li>Position: {props.position} </li>
                <li>Date of Birth: {props.birth} </li>
                </ul>
            </div>
        </div>
    )
}

export default EmployeeCard;