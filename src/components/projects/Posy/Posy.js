import React, { useState, useEffect } from "react";
import { imageLoader } from "../../../assets/projects/Posy/images";
import { Paragraph } from "../../../styled_components/Paragraph";
import { Image } from "../../../styled_components/Image";
import Slider from "react-slick";

export const Posy = () => {
  const [images, imagesSet] = useState([]);

  useEffect(() => {
    const images = imageLoader();
    imagesSet(images);
  }, []);

  let settings = {
    arrows: true,
    dots: true,
    infinite: true,
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
        <p>
          <strong>Posy</strong>
          <br />
          <br />
          <br />
          Concrete injected into nylon socks, hanged to create soft shapes
          explores the boundaries within this substance.
          <br />
          <br />
          <strong>2019 / Rotterdam</strong>
          <br />
          <br />
          <br />
          <strong>Photo: Maryam Benzebiba</strong>
        </p>
      </Paragraph>
    </>
  );
};
