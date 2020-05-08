import styled from "styled-components";

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  display: grid;

  & > div {
    display: grid;
  }
`;

export default Inner;
