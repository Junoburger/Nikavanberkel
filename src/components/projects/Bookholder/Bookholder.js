import React, { useState, useEffect, useRef } from "react";
import { imageLoader } from "../../../assets/projects/Bookholder/images";
import { Image } from "../../../styled_components/Image";
import { Text, Arrow, ProjectName } from "../../../styled_components/Paragraph";
import Slider from "react-slick";

export const Bookholder = () => {
  const [images, imagesSet] = useState([]);

  const nextEl = useRef(null);

  useEffect(() => {
    const images = imageLoader();
    imagesSet(images);
  }, []);

  function PrevArr(props) {
    console.log({ props });
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
              <ProjectName>Bookholder</ProjectName>
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
