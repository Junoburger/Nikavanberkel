import React, { useState, useEffect } from "react";
import { imageLoader } from "../../../assets/projects/Bookholder/images";
import { Image } from "../../../styled_components/Image";
import { Paragraph } from "../../../styled_components/Paragraph";
import Slider from "react-slick";

export const Bookholder = () => {
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
        <strong>Bookholder</strong>
        <br />
        <br />
        <br />
        Experimentation of stability and equilibrium throughout intelligible
        forms. Soft shadows and lights were explored.
        <br />
        <br />
        <br />
        <p>2018 / Rotterdam</p>
        <br />
        <br />
        <br />
        <p>Photography: Maryam Benzebiba</p>
      </Paragraph>
    </>
  );
};
