import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {name: 'Nikname 1', age: 22}, 
      {name: 'Nikname 2', age: 23} 
    ]
  }

  swithCall = () => {
    //alert('You are clickrd.');
    this.setState({
      person: [
        {name: 'name Vergil', age: 25}, 
        {name: 'name Dante', age: 27} 
      ]
    });
  }


  render() {
    return (
      <div className="App">
        <h1>Does this Working?</h1>
        <Person name="Palash"/>
        <Person name="Palash">This is Child </Person>
        <h1>State Test</h1>
        <h5>My {this.state.person[0].name} and age {this.state.person[0].age}</h5>
        <h5>My {this.state.person[1].name} and age {this.state.person[1].age}</h5>
        <h1>Event Test</h1>
        <button onClick={this.swithCall}>Click Me</button>
      </div>
    );
    // var childEl = React.createElement('h1', null, 'Does this Working?');
    // return React.createElement('div', {className: 'App'}, childEl);
  }
}

export default App;
