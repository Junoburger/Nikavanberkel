import React from "react";

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import {
  Paragraph,
  Header,
  Section
} from "../../../styled_components/Paragraph";

const images = [
  {
    id: 1,
    src: img1,
    alt: "foto 1 bookholder",
    text: null
  },
  {
    id: 2,
    src: img2,
    alt: "foto 2 bookholder",
    text: null
  },
  {
    id: 3,
    src: img3,
    alt: "foto 3 bookholder",
    text: null
  },
  {
    id: 4,
    src: null,
    alt: null,
    text: () => {
      return (
        <Paragraph>
          <Header>Bookholder</Header>
          <Section>
            Experimentation of stability and equilibrium throughout intelligible
            forms. Soft shadows and lights were explored.
          </Section>
          <Section>2018 / Rotterdam</Section>
          <Section>Photography: Maryam Benzebiba</Section>
        </Paragraph>
      );
    }
  }
];

export const imageLoader = () => {
  return images;
};
