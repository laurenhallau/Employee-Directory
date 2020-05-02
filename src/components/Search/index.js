import React, {Component} from "react";
import employees from "../../employees.json";
import "./style.css";
// import App from "../../App";
import EmployeeCard from "../EmployeeCard";

// function Search(props) {
//     return (
//         <form className="form-inline justify content center">
//           <input 
//           className="form-control mr-sm-2"
//           type="search"
//           placeholder="Search"
//           name={props.name}
//           value={props.value}
//           onChange={props.onChange}
//           label={props.label}
//           />
          
//         </form>
//     );
// }

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      employees,
      filteredEmployees: []
    }
  }
  filterList = e => {
    console.log("working");
    const filterTarget = e.target.value;
    let employeeList = this.state.employees;
    // console.log(employeeList);
    employeeList = employeeList.filter(i =>{
      let values = Object.values(i)
        .join("")
        .toLocaleLowerCase();
        return values.indexOf(filterTarget.toLowerCase()) !== -1;
      // console.log(values);
      // return i.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    })
    this.setState({filteredEmployees: employeeList});
  }
  
  render(){
    console.log('fil', this.state.filteredEmployees)
    return(
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
        
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

class List extends React.Component{
  render(){
    const allEmployees = this.props.employees.map((i)=>{
      return <li key={i}>{i}</li>
    })
    return(
      <ul>
        {allEmployees}
      </ul>
    )
  }
}

export default Search;