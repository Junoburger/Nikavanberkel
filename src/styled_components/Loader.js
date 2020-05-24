import styled, { keyframes } from "styled-components";

export const LoaderGrid = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const loader = keyframes`

  0%{
    min-width: 25rem;
 min-height: 35rem;
  }
  100%{
    min-width: 30rem;
    min-height: 40rem;
  }
`;
export const Loader = styled.div`
  animation: ${loader} 2s infinite ease-in-out;
  min-width: 30rem;
  min-height: 40rem;
  background: rgba(10, 10, 10, 0.1);
`;
