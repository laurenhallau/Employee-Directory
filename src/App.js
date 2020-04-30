import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
// import logo from './logo.svg';
import './App.css';
import employees from "./employees.json";
// import { findRenderedComponentWithType } from 'react-dom/test-utils';

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron></Jumbotron>
        {this.state.employees.map(employee => (
          <EmployeeCard
          id={employee.id}
          key={employee.id}
          name={employee.name}
          image={employee.image}
          position={employee.position}
          birth={employee.birth}
          country={employee.country}
          />
        ))}
      </Wrapper>
    )
  }

}
export default App;
