import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Title";
// import EmployeeCard from "./components/EmployeeCard";
// import Search from "./components/Search";
// import logo from './logo.svg';
import './App.css';
import employees from "./employees.json";
import Main from "./components/Main";
// import { findRenderedComponentWithType } from 'react-dom/test-utils';

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron />
        <Main />
      
        
      </Wrapper>
    )
  }

}
export default App;
