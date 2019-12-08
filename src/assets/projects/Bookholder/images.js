import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./front.jpg";

const images = [
  {
    id: 1,
    src: img1,
    alt: "foto 1 bookholder"
  },
  {
    id: 2,
    src: img2,
    alt: "foto 2 bookholder"
  },
  {
    id: 3,
    src: img3,
    alt: "foto 3 bookholder"
  },
  {
    id: 4,
    src: img4,
    alt: "foto 4 bookholder"
  }
];

export const imageLoader = () => {
  return images;
};
