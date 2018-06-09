import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Does this Working?</h1>
        <Person name="Palash"/>
        <Person name="Palash">This is Child </Person>
      </div>
    );
    // var childEl = React.createElement('h1', null, 'Does this Working?');
    // return React.createElement('div', {className: 'App'}, childEl);
  }
}

export default App;
