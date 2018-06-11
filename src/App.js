import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Nikname 1', age: 22 },
      { name: 'Nikname 2', age: 23 }
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
      this.state.person.map( person => {
          return <li>Name : {person.name} , Age : {person.age}</li>
      } 
      )
    )
    if(this.state.personStatus){
      conText = ( <h4>Condetion Text</h4> )
    }
    return (
      <div className="App">
        <h1>Does this Working?</h1>
        <button onClick={this.personStatusToggle}>Person Toggle</button>
        
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
      </div>
    );
    // var childEl = React.createElement('h1', null, 'Does this Working?');
    // return React.createElement('div', {className: 'App'}, childEl);
  }
}

export default App;
