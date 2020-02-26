import React from "react";
import "./Person.css"

const person = props => {
    //console.log(props);

  return (
    <div className="Person">
      <h3 onClick={props.click}>
        Hi My name is {props.name} my age is {props.age}
      </h3>
      <input type='text' onChange={props.changed} value={props.name}/>
    </div>
  );
};

export default person;
