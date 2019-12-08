import React from "react";
import { ImageGrid } from "./ImageGrid";
import { ProjectWrapper } from "../../../styled_components/ProjectWrapper";

export const TwoDimensionalVase = () => {
  return (
    <>
      <ProjectWrapper>
        <ImageGrid />
        <p>
          <strong>Two dimensional vase</strong>
          <br />
          <br />
          <br />
          Two dimensional vase, made of mirror leaned to the wall. Stems and
          water container remain invisible, blossoms penetrating the surface are
          multiplied.
          <br />
          <br />
          <br />
          <strong>Authors: Ada Finci Terseglav, Nika van Berkel</strong>
          <br />
          <br />
          <strong>Photo: Klemen Ilovar</strong>
        </p>
      </ProjectWrapper>
    </>
  );
};
