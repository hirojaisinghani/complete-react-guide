import React, {Component} from 'react';
import Radium, {StyleRoot} from 'radium';
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
      backgroundColor: 'green',
      border: '1px solid blue',
      cursor: 'pointer',
      color:'black',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'pink',
        color: 'blue'
      }
    }
    let  Persons = null;

    if(this.state.showPersons) {

      Persons = ( 
        <StyleRoot>
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
       </StyleRoot>
      );
      style.backgroundColor = 'red'; 
      style.color = 'white'; 
      style[':hover'] = {
        backgroundColor: 'orange',
        color: 'white'


      }
    }
    let classes = [];
    if (this.state.Persons.length <= 2 ) {
      classes.push('red');
      
    }
    if (this.state.Persons.length <= 1 ) {
      classes.push('bold');
    }
    if(classes.length > 0) {
      classes = classes.join(' ');
    }
     

    
    
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes}>This is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>Display Person Toogle</button>
        <div>
       {Persons}
       </div>
       
      </div>
    );
  }
}
export default Radium(App);
 