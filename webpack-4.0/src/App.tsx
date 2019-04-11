import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import environment from 'environment';

console.log(`environment`, environment);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            View console log to see output.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
