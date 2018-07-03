import React from 'react';
import Radium from 'radium';
import './Person.css';
const person = (props) => {
    return  ( 
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name}</p>
            { 'children' in props ?
                <p>{props.children}</p>    
            :
                <p>not</p> 
            } 
            <input type="text" onChange={props.change} value={props.name} />
        </div> 
    );
};

export default Radium(person);