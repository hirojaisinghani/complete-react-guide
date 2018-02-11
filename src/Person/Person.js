import React from 'react';


const person = (props) => {
  console.log(props.name);
    return (

      <div>
          <p>That person name is <h2><a href="https://www.google.com" target="_blank">{props.name}</a> </h2>
              Age is  :: {props.age}
          </p>
          <p>{props.children}</p>
        </div>
    );
};
export default person;