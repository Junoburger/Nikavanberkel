import React, { useState, useEffect } from "react";
import { imageLoader } from "../../../assets/projects/Two dimensional vase/images";
import { Paragraph } from "../../../styled_components/Paragraph";
import { Image } from "../../../styled_components/Image";
import Slider from "react-slick";

export const TwoDimensionalVase = () => {
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
        <strong>Two dimensional vase</strong>
        <br />
        <br />
        <br />
        Two dimensional vase, made of mirror leaned to the wall. Stems and water
        container remain invisible, blossoms penetrating the surface are
        multiplied.
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
