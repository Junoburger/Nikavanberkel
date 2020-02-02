import styled from "styled-components";

export const ProjectImage = styled.img`
  max-width: 15rem;
  max-height: 15rem;
  margin: 3rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  height: 80%;
  min-width: 25%;
  justify-content: space-around;
  text-align: center;
`;

export const ProjectWrapper = styled.div`
  position: relative;
`;

export const Title = styled.div`
  display: none;

  ${ProjectWrapper}:hover & {
    display: ${props => (props.displayTitle ? "" : "block")};
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  & ${ImageWrapper}:nth-child(1) ${ProjectImage} {
    margin-right: 150px;
  }
  & ${ImageWrapper}:nth-child(3) ${ProjectImage} {
    margin-top: 100px;
    width: 25rem;
    object-fit: cover;
  }
  & ${ImageWrapper}:nth-child(3) ${Title} {
    margin-top: -25px;
  }
  & ${ImageWrapper}:nth-child(4) ${ProjectImage} {
    margin-top: 20px;
  }
  & ${ImageWrapper}:nth-child(5) ${ProjectImage} {
    margin-top: 25px;
    margin-left: -50px;
  }
  & ${ImageWrapper}:nth-child(5) ${Title} {
    margin-top: 0px;
    margin-left: -100px;
  }
`;
