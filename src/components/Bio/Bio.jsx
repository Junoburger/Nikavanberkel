import React from "react";
import { About, AboutParaGraph } from "../../styled_components/About";

export const Bio = (props) => {
  return (
    <>
      <About>
        <AboutParaGraph>
          Nika van Berkel is testing boundaries between architecture, object design and art. Flowing
          in between conceptual thinking, researching endless possibilities and finding beauty in
          peculiarities. Her passion is situated in generating objects and atmospheres for people.
          She has graduated as an architect from the Faculty of Architecture in Ljubljana, Slovenia.
          At the moment residing in Rotterdam, she has worked at several architectural offices
          throughout Europe.
        </AboutParaGraph>
        <div>Publicity:</div>
        <br />
        <ul style={{ listStyle: "none", marginLeft: "-40px" }}>
          <li>2019 BIG See award - Space for One, Ljubljana (SI)</li>
          <li>2019 HIŠE - Space for One, Ljubljana (SI) , p.108</li>
          <li>2019 Magazine Outsider - Space for One, Ljubljana (SI), p.102</li>
          <li>
            2019&nbsp;
            <a href="Https://www.tvambienti.si" target="_blank" rel="noopener noreferrer">
              tvambienti.si
            </a>
            - Space for One, Ljubljana (SI)
          </li>
          <li>
            2017 Exhibition Arhitektura Inventura, Plečnik’s Former Central stadium, Ljubljana (SI)
          </li>
          <li></li>
        </ul>
        <p>nika.van.berkel@gmail.com</p>
        <p>+31 6 38 45 63 49</p>
      </About>
    </>
  );
};
