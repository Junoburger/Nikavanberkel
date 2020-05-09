import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/UI/Header";
import { Main } from "./components/Main/Main";
import { Bio } from "./components/Bio/Bio";
import { Albania } from "./components/projects/Albania/Albania";
import { Bookholder } from "./components/projects/Bookholder/Bookholder";
import { SpaceForOne } from "./components/projects/Space for one/SpaceForOne";
import { TwoDimensionalVase } from "./components/projects/Two dimensional vase/TwoDimensionalVase";
//STYLING
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./master.css";
import "./App.css";
const Posy = lazy(() => import("./components/projects/Posy/Posy"));
//STYLING

const App = () => {
  return (
    <Router>
      <>
        <Header></Header>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={Bio} />
        <Route exact path="/albania" component={Albania} />
        <Route exact path="/bookholder" component={Bookholder} />
        <Suspense fallback={<Main />}>
          <Route exact path="/posy" component={Posy} />
        </Suspense>

        <Route exact path="/spaceforone" component={SpaceForOne} />
        <Route
          exact
          path="/twodimensionalvase"
          component={TwoDimensionalVase}
        />
      </>
    </Router>
  );
};

export default App;
