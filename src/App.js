import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';
class App extends Component {

  state = {
    Persons: [
      {
        name: "Hiro Jaisinghani",
        age:30,
        id:'sdasdasd',
      },
      {
        name: "Sahil Jaisinghani",
        age:12,
        id:'sdasdsd',
      },
      {
        name: "Dheeraj Jaisinghani",
        age:2,
        id:'sdasdaghsd',
      }
    ],
    otherState: 'some other value',
    showPersons: false,
  };
  
  deletePersonHandler = (personIndex) => {

    const persons = this.state.Persons;
    persons.splice(personIndex, 1);
    this.setState({Persons:persons});

  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.Persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {
      ...this.state.Persons[personIndex]
    };
    const persons = [...this.state.Persons];
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({
      Persons:persons
    })

  };
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }
  
  render()  {
    const style = {
      backgroundColor: 'blue',
      border: '1px solid blue',
      cursor: 'pointer',
    }
    let  Persons = null;

    if(this.state.showPersons) {

      Persons = ( 
        <div>
          {this.state.Persons.map((person, index) => {
            return <Person 
             name={person.name} 
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event, person.id)}> 
            </Person>
          }
          )}
       </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button style={style} onClick={()=>this.switchNameHandler('Maximilian!!')}>Swich Name</button> <br/>
        <button onClick={this.togglePersonHandler}>Display Person Toogle</button>
        <div>
       
       {Persons}
       </div>
       
      </div>
    );
  }
}
export default App;
 