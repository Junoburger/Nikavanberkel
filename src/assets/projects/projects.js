import img1 from "./Albania/front.jpg";
import img2 from "./Bookholder/front.jpg";
import img3 from "./Posy/front.jpg";
import img4 from "./Space for one/front.jpg";
import img5 from "./Two dimensional vase/front.jpg";
import img6 from "./MetropolitanArcadia/front.jpg";
import img7 from "./AltoonaPark /front.png";

const projects = [
	{
		id: 1,
		title: "From Albania with love",
		src: img1,
		route: "albania",
	},
	{
		id: 2,
		title: "Posy",
		src: img3,
		route: "posy",
	},
	{
		id: 3,
		title: "Bookholder",
		src: img2,
		route: "bookholder",
	},
	{
		id: 4,
		title: "Metropolitan Arcadia",
		src: img6,
		route: "metropolitan-arcadia",
	},
	{
		id: 5,
		title: "Two dimensional vase",
		src: img5,
		route: "twodimensionalvase",
	},
	{
		id: 6,
		title: "Space for one",
		src: img4,
		route: "spaceforone",
	},
	{
		id: 7,
		title: "Altoona park",
		src: img7,
		route: "altoona-park",
	},
];

export const projectsLoader = () => {
	return projects;
};
