import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
class App extends Component {

  state = {
    Persons: [
      {
        name: "Hiro Jaisinghani",
        age:30
      },
      {
        name: "Sahil Jaisinghani",
        age:12
      },
      {
        name: "Dheeraj Jaisinghani",
        age:2
      }
    ]
  };
  render()  {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age}> </Person>
        <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age}> Hobiess are : Football, Surfing, BasketBall</Person>
        <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age}> </Person>
        
      </div>
    );
  }
}
export default App;
 