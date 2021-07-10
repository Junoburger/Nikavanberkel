import React from "react";
import { About, AboutParaGraph } from "../../styled_components/About";

export const Bio = () => {
	return (
		<About>
			<p>nika.van.berkel@gmail.com</p>
			<p>+31 6 38 45 63 49</p>
			<AboutParaGraph>
				Nika van Berkel is testing boundaries between architecture, object design and art.
				Flowing in between conceptual thinking, researching endless possibilities and
				finding beauty in peculiarities. Her passion is situated in generating objects and
				atmospheres for people. She has graduated as an architect from the Faculty of
				Architecture in Ljubljana, Slovenia. At the moment residing in Rotterdam, she has
				worked at several architectural offices throughout Europe.
			</AboutParaGraph>
			<div>Publicity:</div>
			<br />
			<ul style={{ listStyle: "none", marginLeft: "-40px" }}>
				<li>
					2020 NONUMENT! Symposium Ljubljana, Public Space in Extremis - Lecture on
					Plečnik’s Former Central stadium, Ljubljana (SI)
				</li>
				<li>2019 BIG See award - Space for One, Ljubljana (SI)</li>
				<li>2019 HIŠE - Space for One, Ljubljana (SI) , p.108</li>
				<li>2019 Magazine Outsider - Space for One, Ljubljana (SI), p.102</li>
				<li>2019&nbsp;tvambienti.si - Space for One, Ljubljana (SI)</li>
				<li>
					2017 Exhibition Arhitektura Inventura, Plečnik’s Former Central stadium,
					Ljubljana (SI)
				</li>
				<li>2017 Magazine Outsider - Plečnik’s Former Central stadium, Ljubljana (SI)</li>
				<li>
					2017 Preverjeno - Informative broadcast on topic of Plečnik’s Former Central
					stadium, Ljubljana (SI)
				</li>
				<li>2016 Yearbook of Faculty of Architecture, Ljubljana (SI)</li>
				<li>2015 Dnevnik, 30.November, Ljubljana (SI), p.11</li>
				<li>2015 Praznine, 9th edition, Ljubljana (SI), p.106-113</li>
				<li>
					2015 Prešeren student award / Master thesis / Revitalisation of the former Jože
					Plečnik stadium, Ljubljana (SI)
				</li>
			</ul>
		</About>
	);
};
