import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmployeeCard from "./components/Employee Card";
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
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
          id={employee.id}
          key={employee.id}
          name={employee.name}
          image={employee.image}
          position={employee.position}
          birth={employee.birth}
          />
        ))}
      </Wrapper>
    )
  }

}
export default App;
