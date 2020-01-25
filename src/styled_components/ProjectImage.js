import styled from "styled-components";

export const ProjectWrapper = styled.div`
  position: relative;
`;

export const ProjectImage = styled.img`
  max-width: 15rem;
  max-height: 15rem;
  margin: 3rem;
`;

export const Title = styled.div`
  display: none;

  ${ProjectWrapper}:hover & {
    display: ${props => (props.displayTitle ? "" : "block")};
  }
`;
