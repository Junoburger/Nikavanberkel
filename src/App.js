import React, { Component } from 'react';
import './App.css';
import {Header} from './components/UI/Header';
import {Example} from './components/Card/Card';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
      <div className="cards">
      <Example></Example>
      <Example></Example>
      <Example></Example>
      </div>
      </div>
    );
  }
}

export default App;
