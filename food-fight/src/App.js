import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FoodFight</h1>
        </header>
        <p className="App-intro">
          This App is to rank the undisputed champs in three different food categories:
          Tacos, Burgers, and BBQ in Austin, TX.
        </p>
      </div>
    );
  }
}

export default App;
