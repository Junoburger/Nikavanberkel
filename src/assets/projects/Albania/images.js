import React from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";
import img10 from "./10.jpg";
import {
  Paragraph,
  Header,
  Section,
} from "../../../styled_components/Paragraph";

const images = [
  {
    id: 1,
    src: img1,
    alt: "foto 1 Albania",
    text: null,
  },
  {
    id: 2,
    src: img2,
    alt: "foto 2 Albania",
    text: null,
  },
  {
    id: 3,
    src: img3,
    alt: "foto 3 Albania",
    text: null,
  },
  {
    id: 4,
    src: img4,
    alt: "foto 4 Albania",
    text: null,
  },
  {
    id: 5,
    src: img5,
    alt: "foto 5 Albania",
    text: null,
  },
  {
    id: 6,
    src: img6,
    alt: "foto 6 Albania",
    text: null,
  },
  {
    id: 7,
    src: img7,
    alt: "foto 7 Albania",
    text: null,
  },
  {
    id: 8,
    src: img8,
    alt: "foto 8 Albania",
    text: null,
  },
  {
    id: 9,
    src: img9,
    alt: "foto 9 Albania",
    text: null,
  },
  {
    id: 10,
    src: img10,
    alt: "foto 10 Albania",
    text: null,
  },
  {
    id: 11,
    src: null,
    alt: null,
    text: () => {
      return (
        <Paragraph>
          <Header>From Albania with love</Header>
          <Section>
            The Albanian pavilion becomes a testing area where all people can
            participate.
            <br /> We can see it as a boost to open up a dialog about the
            meaning of public space
            <br /> and as a reaction towards increasing privatization of public
            spaces in Albania and around the globe.
          </Section>
          <Section>
            With the gesture of »breaking the wall« we want to open up and
            expand the space of the Albanian pavilion into the city. With this
            gesture we want to show to the wider public that we should always
            question the borders and try to look beyond, that we can always push
            the boundaries and improve the public space in the cities.
          </Section>
          <Section>
            2017 / concept design for Albanian pavilion / Venice Biennale /
            Competition finalists <br /> Authors: Anouk Vogel, Matic Vrabič,
            Nika van Berkel
          </Section>
        </Paragraph>
      );
    },
  },
];

export const imageLoader = () => {
  return images;
};
