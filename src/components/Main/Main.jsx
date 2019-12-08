import React, { useState, useEffect } from "react";
import { projectsLoader } from "../../assets/projects/projects";
import { ListItem } from "../../styled_components/ListItem";
import { NavLink } from "react-router-dom";
import "./Main.css";

export const Main = props => {
  const [projects, projectsSet] = useState([]);

  useEffect(() => {
    const projects = projectsLoader();
    projectsSet(projects);
  }, []);

  return (
    <>
      <ul>
        {projects.map(({ id, title, route }) => (
          <ListItem key={id}>
            <NavLink
              activeClassName="active"
              className="Nav_link"
              exact={true}
              to={`/${route}`}
            >
              {title}
            </NavLink>
          </ListItem>
        ))}
      </ul>
    </>
  );
};
