import React, { Component } from "react";
import "./MyApp.css";
import Person from "./Person/Person";

class MyApp extends Component {
  state = {
    persons: [
      { name: "Himanshu", age: 30, id: 1 },
      { name: "Ram", age: 20, id: 2 },
      { name: "Shyam", age: 10, id: 3 }
    ],
    showPerson: false
  };

  /*switchNameHandler = newname => {
    //console.log("was clicked");
    this.setState({
      persons: [
        { name: newname, age: 30 },
        { name: "Ravi", age: 20 },
        { name: "Sam", age: 10 }
      ]
    });
  };*/

  deletePersonHandler = getIndex => {
    //const persons = this.state.persons.slice(); // this way we can copy an array to a variable
    const persons = [...this.state.persons];
    //console.log("persons",persons)
    persons.splice(getIndex, 1);
    this.setState({ persons: persons });
  };

  nameChnageHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    //console.log("person ===", person)
    persons[personIndex]  = person;

    this.setState({persons:persons});
}

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color:"white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let person = null;
    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChnageHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if(this.state.persons.length <=2){
        classes.push('red')
    }
    if(this.state.persons.length < 2){
        classes.push('bold')
    }

    return (
      <div className="MyApp">
        <div className={classes.join(' ')}>Himanshu</div>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle person
        </button>
        {person}
      </div>
    );
  }
}

export default MyApp;
