import React, { useState, useEffect, useRef } from "react";
import { Image } from "../../../styled_components/Image";
import { imageLoader } from "../../../assets/projects/Albania/images";
import { Text, ProjectName } from "../../../styled_components/Paragraph";
import Slider from "react-slick";

const Albania = () => {
  const [images, imagesSet] = useState([]);
  // const [activeSlide, setActiveSlide] = useState(1);
  const nextEl = useRef(null);

  useEffect(() => {
    const images = imageLoader();
    imagesSet(images);
  }, []);

  let settings = {
    arrows: false,
    speed: 500,
    infinite: true,
    fade: true,
    // afterChange: (current) => setActiveSlide(current + 1),
  };

  const next = () => {
    nextEl.current.slickNext();
  };

  const styler = {
    display: "block",
    margin: "0 auto",
    cursor: "pointer",
    // 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" style="font-size: 22pt;"><text y="15">></text></svg>\'), auto',
  };

  return (
    <>
      <Slider style={styler} ref={nextEl} {...settings}>
        {images.map(({ id, src, alt, text }, index) => {
          return text === null ? (
            <React.Fragment key={id}>
              <Image src={src} alt={alt} />
              <ProjectName>From Albania with love</ProjectName>
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

export default Albania;
