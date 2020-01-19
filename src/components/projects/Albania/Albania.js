import React, { useState, useEffect } from "react";
import { Image } from "../../../styled_components/Image";
import { imageLoader } from "../../../assets/projects/Albania/images";
import { Paragraph } from "../../../styled_components/Paragraph";
import Slider from "react-slick";

export const Albania = () => {
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
        <strong>From Albania with love</strong>
        <br />
        <br />
        <br />
        The Albanian pavilion becomes a testing area where all people can
        participate. We can see it as a boost to open up a dialog about the
        meaning of public space and as a reaction towards increasing
        privatization of public spaces in Albania and around the globe.
        <br />
        <br />
        With the gesture of »breaking the wall« we want to open up and expand
        the space of the Albanian pavilion into the city. With this gesture we
        want to show to the wider public that we should always question the
        borders and try to look beyond, that we can always push the boundaries
        and improve the public space in the cities.
        <br />
        <br />
        <br />
        <strong>
          2017 / concept design for Albanian pavilion / Venice Biennale /
          Competition finalists Authors: Anouk Vogel, Matic Vrabič, Nika van
          Berkel
        </strong>
      </Paragraph>
    </>
  );
};
