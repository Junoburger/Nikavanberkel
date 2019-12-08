import React from "react";
import { ImageGrid } from "./ImageGrid";
import { ProjectWrapper } from "../../../styled_components/ProjectWrapper";

export const Bookholder = () => {
  return (
    <>
      <ProjectWrapper>
        <p>
          <strong>Bookholder</strong>
          <br />
          <br />
          <br />
          Experimentation of stability and equilibrium throughout intelligible
          forms. Soft shadows and lights were explored.
          <br />
          <br />
          <br />
          <strong>2018 / Rotterdam</strong>
          <br />
          <br />
          <br />
          <strong>Photography: Maryam Benzebiba</strong>
        </p>
        <ImageGrid />
      </ProjectWrapper>
    </>
  );
};
