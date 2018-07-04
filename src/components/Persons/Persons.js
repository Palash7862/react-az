import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.person.map( (person, index) => {
        return <Person name="Palashk" 
        click={() => props.click('name Vergil')} 
        change={props.change}>This is Child </Person>
        //return <li key={index}>Name : {person.name} , Age : {person.age}</li>
    })


export default persons;