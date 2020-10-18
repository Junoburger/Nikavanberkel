import React from "react";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";
import img10 from "./10.jpg";
import { Paragraph, Header, Section } from "../../../styled_components/Paragraph";

const images = [
  {
    id: 1,
    src: img1,
    alt: "foto 1 MetroPolitan Arcadia",
    text: null,
  },
  {
    id: 2,
    src: img2,
    alt: "foto 2 MetroPolitan Arcadia",
    text: null,
  },
  {
    id: 3,
    src: img3,
    alt: "foto 3 MetroPolitan Arcadia",
    text: null,
  },
  {
    id: 4,
    src: img4,
    alt: "foto 4 MetroPolitan Arcadia",
    text: null,
  },
  {
    id: 5,
    src: img5,
    alt: "foto 5 MetroPolitan Arcadia",
    text: null,
  },
  {
    id: 6,
    src: img6,
    alt: "foto 6 MetroPolitan Arcadia",
    text: null,
  },
  {
    id: 7,
    src: img7,
    alt: "foto 7 MetroPolitan Arcadia",
    text: null,
  },
  {
    id: 8,
    src: img8,
    alt: "foto 8 MetroPolitan Arcadia",
    text: null,
  },
  {
    id: 9,
    src: img9,
    alt: "foto 9 MetroPolitan Arcadia",
    text: null,
  },
  {
    id: 10,
    src: img10,
    alt: "foto 10 MetroPolitan Arcadia",
    text: null,
  },
  {
    id: 11,
    src: null,
    alt: null,
    text: () => {
      return (
        <Paragraph>
          <Header>Metropolitan Arcadia</Header>
          <Section>
            Project consists of four themes and elaborates them in drawings. It results in a small
            publication, which creates an additional aesthetic aspect to the presentation of the
            concept.
          </Section>
          <Section>
            A publication in its physical form adds value to the wholesomeness of the project.
          </Section>
          <Section>
            2016 / Competition for Droog / Rotterdam
            <br /> Authors: Ada Finci Terseglav, Nika van Berkel
          </Section>
        </Paragraph>
      );
    },
  },
];

export const imageLoader = () => {
  return images;
};
