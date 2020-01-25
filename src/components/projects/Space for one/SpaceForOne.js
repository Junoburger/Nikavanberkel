import React, { useState, useEffect } from "react";
import { imageLoader } from "../../../assets/projects/Space for one/images";
import { Image } from "../../../styled_components/Image";

import Slider from "react-slick";
import { Paragraph } from "../../../styled_components/Paragraph";

export const SpaceForOne = () => {
  const [images, imagesSet] = useState([]);
  useEffect(() => {
    const images = imageLoader();
    imagesSet(images);
  }, []);

  let settings = {
    arrows: true,
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 1000
  };

  return (
    <>
      <Slider {...settings}>
        {images.map(({ id, src, alt }) => (
          <Image key={id} src={src} alt={alt} />
        ))}
      </Slider>
      <Paragraph>
        <strong>Space for One</strong>
        <br />
        <br />
        <br />
        This is an interior design of a small apartment for one person. The
        question was how to live generously even when the size of the space
        itself is not. There are only a few decisive pieces of furniture
        populating the apartment, seeking a relation between openness and
        privacy.
        <br />
        <br />
        The dialog between formal rigour and childish fascination is reflected
        in the simple yet playful geometry of the design. Neutral colours, soft
        materials and openness resonate with inhabitants character trough the
        space.
        <br />
        <br />
        <strong>
          2019 / interior design / 44 m2 / Ljubljana / Private client
        </strong>
        <br />
        <br />
        <br />
        <strong>Authors: Ada Finci Terseglav, Nika van Berkel</strong>
        <br />
        <br />
        <strong>Photo: Klemen Ilovar</strong>
      </Paragraph>
    </>
  );
};
