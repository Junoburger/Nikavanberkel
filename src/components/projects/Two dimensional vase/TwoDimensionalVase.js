import React, { useState, useEffect, useRef } from "react";
import { imageLoader } from "../../../assets/projects/Two dimensional vase/images";
import {
  Arrow,
  Text,
  ProjectName,
  ActiveNum,
} from "../../../styled_components/Paragraph";
import { Image } from "../../../styled_components/Image";
import Slider from "react-slick";

const TwoDimensionalVase = () => {
  const [images, imagesSet] = useState([]);
  const [activeSlide, setActiveSlide] = useState(1);
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
  function ActiveSlideNum() {
    return (
      <>
        <ActiveNum>{activeSlide}</ActiveNum>
      </>
    );
  }

  let settings = {
    arrows: true,
    prevArrow: <PrevArr />,
    nextArrow: <NextArr />,
    speed: 500,
    infinite: true,
    fade: true,
    afterChange: (current) => setActiveSlide(current + 1),
  };

  const next = () => {
    nextEl.current.slickNext();
  };

  const styler = {
    display: "block",
    margin: "0 auto",
    cursor: "pointer",
  };

  return (
    <>
      <Slider style={styler} ref={nextEl} {...settings}>
        {images.map(({ id, src, alt, text }, index) => {
          return text === null ? (
            <React.Fragment key={id}>
              <Image src={src} alt={alt} />
              <ProjectName>Two dimensional vase</ProjectName>
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
      <ActiveSlideNum />
    </>
  );
};

export default TwoDimensionalVase;
