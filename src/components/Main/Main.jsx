import React, { useState, useEffect } from "react";
import { projectsLoader } from "../../assets/projects/projects";
import {
  ProjectImage,
  Title,
  ProjectWrapper
} from "../../styled_components/ProjectImage";
import { ImageWrapper } from "../../styled_components/ImageWrapper";
import { NavWrapper } from "../../styled_components/NavWrapper";

import { NavLink } from "react-router-dom";
import "./Main.css";

let flexStyle = {
  display: "flex",
  flexDirection: "column"
};

export const Main = () => {
  const [projects, projectsSet] = useState([]);
  const [displayTitle, setDisplayTitle] = useState(false);

  useEffect(() => {
    const projects = projectsLoader();
    projectsSet(projects);
  }, []);

  return (
    <>
      <NavWrapper>
        {projects.map(({ id, title, route, src }, index) => (
          <ImageWrapper id={id} key={id}>
            <NavLink
              activeClassName="active"
              className="Nav_link"
              exact={true}
              to={`/${route}`}
            >
              <ProjectWrapper
                displayTitle={displayTitle}
                onMouseEnter={() => {
                  if (index + 1 === id && document.getElementById(id).id) {
                    if (title.toLowerCase().replace(/\s/g, "") === route) {
                      setDisplayTitle(true);
                    }
                  }
                }}
                onMouseLeave={() => {
                  setDisplayTitle(false);
                }}
                style={flexStyle}
              >
                <ProjectImage src={src} alt={title} />
                <Title>{title}</Title>
              </ProjectWrapper>
            </NavLink>
          </ImageWrapper>
        ))}
      </NavWrapper>
    </>
  );
};
