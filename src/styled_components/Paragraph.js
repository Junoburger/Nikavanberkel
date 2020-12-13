import styled from "styled-components";

export const Paragraph = styled.div`
  padding: 5% 30%;
`;

export const Header = styled.div`
  position: relative;
  text-align: left;
  font-size: 10pt;
`;

export const Section = styled.div`
  position: relative;
  padding: 20px 0 5px 0;
  text-align: left;
  font-size: 10pt;
  white-space: pre-line;
`;

export const Text = styled.div`
  position: flex;
  white-space: pre-line;
`;

export const Arrow = styled.div`
  position: fixed;
  margin-left: ${(props) => (props.leftArrow ? "90%" : "")};
  margin-top: 20rem;
  &&& {
    font-weight: lighter;
  }
`;

export const ProjectName = styled.div`
  text-align: center;
  padding: 2%;
  font-size: 10pt;
`;
