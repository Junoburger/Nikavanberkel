import React from "react";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img1 from "./1.jpg";
import {
  Paragraph,
  Header,
  Section
} from "../../../styled_components/Paragraph";

const images = [
  {
    id: 1,
    src: img1,
    alt: "foto 10 Two Dimensional Vase",
    text: null
  },
  {
    id: 2,
    src: img2,
    alt: "foto 2 Two Dimensional Vase",
    text: null
  },
  {
    id: 3,
    src: img3,
    alt: "foto 3 Two Dimensional Vase",
    text: null
  },
  {
    id: 4,
    src: img4,
    alt: "foto 4 Two Dimensional Vase",
    text: null
  },
  {
    id: 5,
    src: img5,
    alt: "foto 5 Two Dimensional Vase",
    text: null
  },
  {
    id: 6,
    src: img6,
    alt: "foto 6 Two Dimensional Vase",
    text: null
  },
  {
    id: 7,
    src: img7,
    alt: "foto 7 Two Dimensional Vase",
    text: null
  },
  {
    id: 8,
    src: img8,
    alt: "foto 8 Two Dimensional Vase",
    text: null
  },
  {
    id: 12,
    src: null,
    alt: null,
    text: () => {
      return (
        <Paragraph>
          <Header>Two dimensional vase</Header>
          <Section>
            Two dimensional vase, made of mirror leaned to the wall. Stems and
            water container remain invisible, blossoms penetrating the surface
            are multiplied.
          </Section>
          <Section>Authors: Matic Vrabič, Nika van Berkel</Section>
          <Section>Photo: Klemen Ilovar</Section>
        </Paragraph>
      );
    }
  }
];

export const imageLoader = () => {
  return images;
};
