import styled from "styled-components";

export const ProjectImage = styled.img`
	max-width: 15rem;
	max-height: 15rem;
	margin: 3rem;
	/* object-fit: scale-down; */
`;

export const ImageWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	text-align: center;
	height: 80%;
	min-width: 25%;
	justify-content: center;
	text-align: center;
`;

export const ProjectWrapper = styled.div`
	position: relative;
`;

export const Title = styled.div`
	/* display: none; */
	color: white;
	${ProjectWrapper}:hover & {
		color: ${(props) => (props.displayTitle ? "black" : "white")};
	}
`;

export const NavWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;

	& ${ImageWrapper}:nth-child(1) ${ProjectImage} {
		margin-right: 150px;
		@media (max-width: 768px) {
			margin-right: 40px;
		}
	}

	& ${ImageWrapper}:nth-child(2) ${ProjectImage} {
		@media (max-width: 768px) {
			margin-top: 0px;
		}
	}
	& ${ImageWrapper}:nth-child(3) ${ProjectImage} {
		margin-top: 100px;
		width: 25rem;
		object-fit: cover;
		@media (max-width: 768px) {
			margin-top: 0px;
		}
	}
	& ${ImageWrapper}:nth-child(3) ${Title} {
		margin-top: -25px;
		@media (max-width: 768px) {
			margin-top: 0px;
		}
	}
	& ${ImageWrapper}:nth-child(4) ${ProjectImage} {
		margin-top: 20px;
		@media (max-width: 768px) {
			margin-top: 0px;
		}
	}
	& ${ImageWrapper}:nth-child(5) ${ProjectImage} {
		margin-top: 25px;
		margin-left: -50px;
		@media (max-width: 768px) {
			margin-top: 0px;
			margin-left: 0px;
		}
	}
	& ${ImageWrapper}:nth-child(5) ${Title} {
		margin-top: 0px;
		margin-left: -100px;
		@media (max-width: 768px) {
			margin-top: 0px;
			margin-left: 0px;
		}
	}
`;
