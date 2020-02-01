import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import { Arrow, Text, ProjectName } from "../../../styled_components/Paragraph";
import { Image } from "../../../styled_components/Image";
import { imageLoader } from "../../../assets/projects/Posy/images";

export const Posy = () => {
  const [images, imagesSet] = useState([]);
  const nextEl = useRef(null);

  useEffect(() => {
    const images = imageLoader();
    imagesSet(images);
  }, []);

  function PrevArr(props) {
    const { className, onClick } = props;
    return <Arrow leftArrow className={className} onClick={onClick} />;
  }

  function NextArr(props) {
    const { className, onClick } = props;
    return <Arrow className={className} onClick={onClick} />;
  }

  let settings = {
    arrows: true,
    prevArrow: <PrevArr />,
    nextArrow: <NextArr />,
    speed: 500,
    infinite: true,
    fade: true
  };

  const next = () => {
    nextEl.current.slickNext();
  };

  const styler = {
    display: "block",
    margin: "0 auto",
    cursor: "pointer"
  };

  return (
    <>
      <Slider style={styler} ref={nextEl} {...settings}>
        {images.map(({ id, src, alt, text }, index) => {
          return text === null ? (
            <React.Fragment key={id}>
              <Image src={src} alt={alt} />
              <ProjectName>Posy</ProjectName>
            </React.Fragment>
          ) : (
            <Text
              onClick={() => {
                next();
              }}
              key={index}
            >
              {text()}
            </Text>
          );
        })}
      </Slider>
    </>
  );
};
