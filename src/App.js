import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {Header} from './components/UI/Header';
import {Main} from './components/Main/Main'
import {Bio} from './components/Bio/Bio'
import {News} from './components/News/News'
import {Contact} from './components/Contact/Contact'
import {Projects} from './components/Projects/Projects';


class App extends PureComponent {
  render() {
    return (
      <Router>
      <div className="App">
       <Header></Header>
        <div>
        <Route exact path="/" component={Main}/>
        <Route exact path="/bio" component={Bio}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/news" component={News}/>
        <Route exact path="/contact" component={Contact}/>
        </div>
      </div>
      </Router>
    );
  }
}




export default App;
