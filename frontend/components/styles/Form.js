import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  background: ${(props) => props.theme.whiteTrans75};
  box-shadow: ${(props) => props.theme.bs};
  border-radius: ${(props) => props.theme.br};
  padding: ${(props) => props.theme.padding};
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${(props) => props.theme.red};
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    border: 2px solid ${(props) => props.theme.brightPink};
    color: ${(props) => props.theme.brightPink};
    font-size: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;

    &:hover {
      background: ${(props) => props.theme.brightPink};
      color: ${(props) => props.theme.white};
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 5px;
      content: "";
      display: block;
      background-image: ${(props) => props.theme.lg};
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
