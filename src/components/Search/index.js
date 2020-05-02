import React from "react";
import "../../employees.json";
import "./style.css";

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

class Search extends React.Component{
  constructor(){
    super()
    this.state = {
      employees: []
    }
  }
  filterList(e){
    let employeeList = this.state.employees;
    employeeList = employeeList.filter((i)=>{
      return i.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    })
    this.setState({employees: employeeList});
  }
  componentDidMount(){
    this.setState({employees: this.state.employees})
  }
  render(){
    return(
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
      <List employees={this.state.employees}/>
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