import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./components/UI/Header";
import { Main } from "./components/Main/Main";
import { Bio } from "./components/Bio/Bio";

// STYLES
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./master.css";
import "./App.css";
import { LoadingState } from "./LoadingState";
import AltoonaPark from "./components/projects/Altoona park/AltoonaPark";

// START LAZY IMPORTS
const Posy = React.lazy(() => import("./components/projects/Posy/Posy"));
const Bookholder = React.lazy(() => import("./components/projects/Bookholder/Bookholder"));
const Albania = React.lazy(() => import("./components/projects/Albania/Albania"));
const SpaceForOne = React.lazy(() => import("./components/projects/Space for one/SpaceForOne"));
const TwoDimensionalVase = React.lazy(() =>
	import("./components/projects/Two dimensional vase/TwoDimensionalVase")
);
const MetropolitanArcadia = React.lazy(() =>
	import("./components/projects/Metropolitan Arcadia/MetropolitanArcadia")
);
// END LAZY IMPORTS

const App = () => {
	const [pixleRatio, setPixelRatio] = useState(0);
	const [innerHeight, setInnerHeight] = useState(0);

	useEffect(() => {
		if (window) {
			setPixelRatio(window.devicePixelRatio);
			setInnerHeight(window.innerHeight);
		}
	}, []);

	const style = {
		height: "100vh",
	};
	const routesStyle = {
		marginTop: `${
			pixleRatio && innerHeight && pixleRatio < 2 ? innerHeight / 125 : innerHeight / 450
		}%`,
	};
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Header></Header>
			<div id="ROUTES_CONTAINER" style={style}>
				<Route exact path="/" component={Main} />

				<div style={routesStyle}>
					<Route exact path="/about" component={Bio} />
					<Suspense fallback={<LoadingState />}>
						<Route exact path="/albania" component={Albania} />
					</Suspense>
					<Suspense fallback={<LoadingState />}>
						<Route exact path="/bookholder" component={Bookholder} />
					</Suspense>
					<Suspense fallback={<LoadingState />}>
						<Route exact path="/posy" component={Posy} />
					</Suspense>
					<Suspense fallback={<LoadingState />}>
						<Route exact path="/spaceforone" component={SpaceForOne} />
					</Suspense>
					<Suspense fallback={<LoadingState />}>
						<Route exact path="/twodimensionalvase" component={TwoDimensionalVase} />
					</Suspense>
					<Suspense fallback={<LoadingState />}>
						<Route exact path="/metropolitan-arcadia" component={MetropolitanArcadia} />
					</Suspense>
					<Suspense fallback={<LoadingState />}>
						<Route exact path="/altoona-park" component={AltoonaPark} />
					</Suspense>
				</div>
			</div>
		</Router>
	);
};

export default App;
