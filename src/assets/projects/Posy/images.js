import React from "react";

import {
  Header,
  Paragraph,
  Section
} from "../../../styled_components/Paragraph";
import img1 from "./1.jpg";
import img2 from "./2.jpg";

const images = [
  {
    id: 1,
    src: img1,
    alt: "foto 1 Posy",
    text: null
  },
  {
    id: 2,
    src: img2,
    alt: "foto 2 Posy",
    text: null
  },
  {
    id: 3,
    src: null,
    alt: null,
    text: () => {
      return (
        <Paragraph>
          <Header>Posy</Header>
          <Section>
            Concrete injected into nylon socks, hanged to create soft shapes
            explores the boundaries within this substance.
          </Section>
          <Section>2019 / Rotterdam</Section>
          <Section>Photo: Maryam Benzebiba</Section>
        </Paragraph>
      );
    }
  }
];

export const imageLoader = () => {
  return images;
};
