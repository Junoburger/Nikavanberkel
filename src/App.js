import React, { Component } from 'react';
import './App.css';
import {Header} from './components/UI/Header';
import {Example} from './components/Card/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <Example></Example>
      </div>
    );
  }
}

export default App;
