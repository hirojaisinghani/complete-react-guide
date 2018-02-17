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
    ],
    otherState: 'some other value',
  };
  switchNameHandler = (newName) => {
    this.setState(
      {
        Persons: [
          {
            name: "Hiro Jaisinghani",
            age:28
          },
          {
            name: newName,
            age:23
          },
          {
            name: "Dheeraj Jaisinghani",
            age:10
          }
        ]
      }
    );
  };
  nameChangedHandler = (event) => {
    this.setState( {
      Persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  };
  render()  {
    const style = {
      backgroundColor: 'blue',
      border: '1px solid blue',
      cursor: 'pointer',
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={()=>this.switchNameHandler('Maximilian!!')}>Swich Name</button>
        <Person 
          name={this.state.Persons[0].name} 
          age={this.state.Persons[0].age}
          click={this.switchNameHandler.bind(this, 'Mahesh')}> 
        </Person>
        <Person
          name={this.state.Persons[1].name} 
          age={this.state.Persons[1].age}
          changed={this.nameChangedHandler}>
          Hobiess are : Football, Surfing, BasketBall
      </Person>
        <Person 
          name={this.state.Persons[2].name} 
          age={this.state.Persons[2].age}> 
       </Person>
        
      </div>
    );
  }
}
export default App;
 