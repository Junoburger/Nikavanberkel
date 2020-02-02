import styled from "styled-components";

export const Image = styled.img`
  position: relative;
  margin: 0 auto;
  height: 40rem;
  object-fit: contain;
  @media (max-width: 768px) {
    height: 25rem;
    object-fit: scale-down;
  }
`;
