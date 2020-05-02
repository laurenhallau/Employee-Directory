import React, {Component} from "react";
import employees from "../../employees.json";
import "./style.css";
// import App from "../../App";
import EmployeeCard from "../EmployeeCard";



class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      employees,
      filteredEmployees: []
    }
  }
  filterList = e => {
    const filterTarget = e.target.value;
    let employeeList = this.state.employees;
    employeeList = employeeList.filter(i =>{
      let values = Object.values(i)
        .join("")
        .toLocaleLowerCase();
        return values.indexOf(filterTarget.toLowerCase()) !== -1;
    })
    this.setState({filteredEmployees: employeeList});
  }
  
  render(){
    return(
      <div className="filter-list">
        <input className="search" type="text" placeholder="Search" onChange={this.filterList}/>
        
        {
          this.state.filteredEmployees[0]?
          
          this.state.filteredEmployees.map(employee => (
            <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            position={employee.position}
            birth={employee.birth}
            country={employee.country}
            />
          )) 
          :
          this.state.employees.map(employee => (
            <EmployeeCard
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            position={employee.position}
            birth={employee.birth}
            country={employee.country}
            />
          ))

        
        }
        
  
      </div>
    )
  }
}

export default Search;