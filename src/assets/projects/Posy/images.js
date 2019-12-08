import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./front.jpg";

const images = [
  {
    id: 1,
    src: img1,
    alt: "foto 1 Posy"
  },
  {
    id: 2,
    src: img2,
    alt: "foto 2 Posy"
  },
  {
    id: 3,
    src: img3,
    alt: "foto 4 Posy"
  }
];

export const imageLoader = () => {
  return images;
};
