import React, { useState, useEffect, useRef } from "react";
import { Image } from "../../../styled_components/Image";
import { imageLoader } from "../../../assets/projects/Albania/images";
import { Text, Arrow } from "../../../styled_components/Paragraph";
import Slider from "react-slick";

export const Albania = () => {
  const [images, imagesSet] = useState([]);

  const nextEl = useRef(null);
  useEffect(() => {
    const images = imageLoader();
    imagesSet(images);
  }, []);

  function PrevArr(props) {
    const { className, onClick } = props;
    return (
      <>
        <Arrow leftArrow className={className} onClick={onClick} />
      </>
    );
  }

  function NextArr(props) {
    const { className, onClick } = props;
    console.log(props);
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

  return (
    <React.Fragment>
      <Slider style={{ cursor: "pointer" }} ref={nextEl} {...settings}>
        {images.map(({ id, src, alt, text }, index) =>
          text === null ? (
            <Image
              onClick={() => {
                next();
              }}
              key={index}
              src={src}
              alt={alt}
            />
          ) : (
            <Text
              onClick={() => {
                next();
              }}
              key={index}
            >
              {text()}
            </Text>
          )
        )}
      </Slider>
    </React.Fragment>
  );
};
