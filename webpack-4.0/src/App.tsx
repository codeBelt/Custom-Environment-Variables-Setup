import React, { Component } from 'react';
import Logo from './logo.svg';
import './App.scss';
import environment from 'environment';

console.log(environment);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo className="App-logo" alt="logo" />
          <p>
            View console log to see output.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
