import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/UI/Header";
import { Main } from "./components/Main/Main";
import { Bio } from "./components/Bio/Bio";
import { Albania } from "./components/projects/Albania/Albania";
import { Bookholder } from "./components/projects/Bookholder/Bookholder";
import { SpaceForOne } from "./components/projects/Space for one/SpaceForOne";
import { TwoDimensionalVase } from "./components/projects/Two dimensional vase/TwoDimensionalVase";

// STYLES
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./master.css";
import "./App.css";
import { Loader } from "./styled_components/Loader";
// LAZY IMPORTS
const Posy = React.lazy(() => import("./components/projects/Posy/Posy"));

const LoadingState = () => {
  return <Loader>Loading…</Loader>;
};

const App: () => JSX.Element = () => {
  return (
    <Router>
      <>
        <Header></Header>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Main} />
        <Route exact path={process.env.PUBLIC_URL + "/about"} component={Bio} />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/albania"}
          component={Albania}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/bookholder"}
          component={Bookholder}
        />
        <React.Suspense fallback={<LoadingState />}>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/posy"}
            component={Posy}
          />
        </React.Suspense>

        <Route
          exact
          path={process.env.PUBLIC_URL + "/spaceforone"}
          component={SpaceForOne}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL + "/twodimensionalvase"}
          component={TwoDimensionalVase}
        />
      </>
    </Router>
  );
};

export default App;
