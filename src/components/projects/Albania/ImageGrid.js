import React, { useState, useEffect } from "react";
import { imageLoader } from "../../../assets/projects/Albania/images";
import { ImageWrapper } from "../../../styled_components/ImageWrapper";
import { Image } from "../../../styled_components/Image";

export const ImageGrid = () => {
  const [images, imagesSet] = useState([]);

  useEffect(() => {
    const images = imageLoader();
    imagesSet(images);
  }, []);

  return (
    <>
      <ImageWrapper>
        {images.map(({ id, src, alt }) => (
          <Image key={id} src={src} alt={alt} />
        ))}
      </ImageWrapper>
    </>
  );
};
