import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/UI/Header";
import { Main } from "./components/Main/Main";
import { Bio } from "./components/Bio/Bio";
import { Albania } from "./components/projects/Albania/Albania";
import { Bookholder } from "./components/projects/Bookholder/Bookholder";
import { Posy } from "./components/projects/Posy/Posy";
import { SpaceForOne } from "./components/projects/Space for one/SpaceForOne";
import { TwoDimensionalVase } from "./components/projects/Two dimensional vase/TwoDimensionalVase";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={Bio} />
        <Route exact path="/albania" component={Albania} />
        <Route exact path="/bookholder" component={Bookholder} />
        <Route exact path="/posy" component={Posy} />
        <Route exact path="/space-for-one" component={SpaceForOne} />
        <Route
          exact
          path="/two-dimensional-vase"
          component={TwoDimensionalVase}
        />
      </div>
    </Router>
  );
};

export default App;
