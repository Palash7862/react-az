import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    person: [
      { id: 'kjdhkj', name: 'Nikname 1', age: 22 },
      { id: 'jkchc', name: 'Nikname 2', age: 23 }
    ],
    personStatus: false
  }

  swithCall = (name) => {
    //alert('You are clickrd.');
    this.setState({
      person: [
        { name: name, age: 25 },
        { name: 'name Dante', age: 27 }
      ]
    });
  }

  nameChange = (event) => {
    //alert('You are clickrd.');
    this.setState({
      person: [
        { name: event.target.value, age: 25 },
        { name: 'Nikname 2', age: 27 }
      ]
    });
  }

  personStatusToggle = () => {
    var personStatus = this.state.personStatus;
    this.setState({
      personStatus: !personStatus
    });
  }


  render() {
    let conText = null;
    let listDisplay = null;
    listDisplay = (
      this.state.person.map( (person, index) => {
        return <li key={index}>Name : {person.name} , Age : {person.age}</li>
    })
    )
    if(this.state.personStatus){ 
      conText = ( <h4>Condetion Text</h4> )
    }

    const style = {
      backgroundColor: '#ddd',
      border: 'none',
      padding: '15px 30px',
      fontWeight: 'bold',
      fontSize: '16px',
      transition: 'all 300ms linear 0s',
      ':hover':{
        boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'all 300ms linear 0s'
      },
      ':focus': {
          outline: 'none'
      }, 
      '@media (max-width: 500px)': {
          width: '100%'
      }
    } 

    return ( 
      <div className="App">
      <StyleRoot>
        <h1>Does this Working?</h1>
        <button style={style} onClick={this.personStatusToggle}>Person Toggle</button>
        
        {conText}
        { this.state.personStatus === true ?
          <div>
            <Person name="Palash" click={() => this.swithCall('name Vergil')} />
            <Person name="Palash" change={this.nameChange}>This is Child </Person>
            <h1>State Test</h1>
            <h5>My {this.state.person[0].name} and age {this.state.person[0].age}</h5>
            <h5>My {this.state.person[1].name} and age {this.state.person[1].age}</h5>
            <h1>Event Test</h1>
            <button onClick={this.swithCall.bind(this, 'name Vergil')}>Click Me</button>
          </div> : null
        }
        <h1>List Test</h1>
        <ul>
          {listDisplay}
        </ul>
        </StyleRoot>
      </div> 
    );
    // var childEl = React.createElement('h1', null, 'Does this Working?');
    // return React.createElement('div', {className: 'App'}, childEl);
  }
}

export default Radium(App);
