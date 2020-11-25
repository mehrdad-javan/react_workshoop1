import React from 'react';

const Person = (props) => {
    return (
        <div className="container">
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p> 
        </div>
    );
}

// default export 0 is the vlaue that will be imported from thew module
export default Person;
