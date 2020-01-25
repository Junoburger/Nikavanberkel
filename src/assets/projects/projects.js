import img11 from "./Albania/front.jpg";
import img2 from "./Bookholder/front.jpg";
import img3 from "./Posy/front.jpg";
import img4 from "./Space for one/front.jpg";
import img5 from "./Two dimensional vase/front.jpg";

const projects = [
  {
    id: 1,
    title: "Albania",
    src: img11,
    route: "albania"
  },
  {
    id: 2,
    title: "Bookholder",
    src: img2,
    route: "bookholder"
  },
  {
    id: 3,
    title: "Posy",
    src: img3,
    route: "posy"
  },
  {
    id: 4,
    title: "Space for one",
    src: img4,
    route: "spaceforone"
  },
  {
    id: 5,
    title: "Two dimensional vase",
    src: img5,
    route: "twodimensionalvase"
  }
];

export const projectsLoader = () => {
  return projects;
};
