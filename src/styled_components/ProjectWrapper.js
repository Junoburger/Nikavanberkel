import styled from "styled-components";

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  padding: 0.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
