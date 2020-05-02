import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Title";
import employees from "./employees.json";
import Main from "./components/Main";

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
};
export default App;
