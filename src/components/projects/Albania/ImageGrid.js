import React, { useState, useEffect } from "react";
import { imageLoader } from "../../../assets/projects/Albania/images";
import { ImageWrapper } from "../../../styled_components/ImageWrapper";

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
          <img
            style={{ width: "200px", height: "200px", padding: "5px" }}
            key={id}
            src={src}
            alt={alt}
          />
        ))}
      </ImageWrapper>
    </>
  );
};
