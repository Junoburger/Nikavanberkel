import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {Header} from './components/UI/Header';
import Main from './components/Main/Main'
import {Bio} from './components/Bio/Bio'



class App extends PureComponent {
  render() {
    return (
      <Router>
      <div className="App">
       <Header></Header>
        <div>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={Bio}/>
        </div>
      </div>
      </Router>
    );
  }
}




export default App;
