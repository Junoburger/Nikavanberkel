import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/UI/Header";
import { Main } from "./components/Main/Main";
import { Bio } from "./components/Bio/Bio";
import { Albania } from "./components/projects/Albania/Albania";
import { Bookholder } from "./components/projects/Bookholder/Bookholder";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <div>
          <Route path="/" component={Main} />
          <Route exact path="/about" component={Bio} />
          <Route exact path="/albania" component={Albania} />
          <Route exact path="/bookholder" component={Bookholder} />
        </div>
      </div>
    </Router>
  );
};

export default App;
