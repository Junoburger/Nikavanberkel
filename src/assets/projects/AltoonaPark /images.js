import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.png";
import img5 from "./5.jpg";

import { Paragraph, Header, Section } from "../../../styled_components/Paragraph";

const images = [
	{
		id: 1,
		src: img1,
		alt: "foto 1 Altoona park",
		text: null,
	},
	{
		id: 2,
		src: img2,
		alt: "foto 2 Altoona park",
		text: null,
	},
	{
		id: 3,
		src: img3,
		alt: "foto 3 Altoona park",
		text: null,
	},
	{
		id: 4,
		src: img4,
		alt: "foto 4 Altoona park",
		text: null,
	},
	{
		id: 5,
		src: img5,
		alt: "foto 5 Altoona park",
		text: null,
	},
	{
		id: 6,
		src: null,
		alt: null,
		text: () => {
			return (
				<Paragraph>
					<Header>Altoona park</Header>
					<Section></Section>
					<Section></Section>
				</Paragraph>
			);
		},
	},
];

export const imageLoader = () => {
	return images;
};
