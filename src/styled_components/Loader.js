import styled, { keyframes } from "styled-components";

const loader = keyframes`

  0%{
    font-size:12pt;
  }
  50%{
    font-size:18pt;
  }
  100%{
    font-size:24pt;
  }
`;
export const Loader = styled.div`
  animation: ${loader} 2s infinite;
  text-align: center;
`;
