import { useState } from "react";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

import StyledSignInForm from "./styles/StyledSignupForm";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      user
    }
  }
`;

const StyledSignup = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  z-index: 4;
  width: 300px;
  height: ${(props) => (props.signupOpen ? "100%" : "0px")};
  opacity: ${(props) => (props.signupOpen ? "1" : "0")};
  overflow: ${(props) => (props.signupOpen ? "visible" : "hidden")};
  transition: all 0.25s ease-in;
  background: ${(props) => props.theme.white};
`;

const ButtonBox = styled.section`
  display: flex;
  justify-content: space-between;
`;

const ButtonLink = styled.span`
  cursor: pointer;
  color: ${(props) => props.theme.purple};
`;

export default function SignupForm({
  handleClick,
  setSignup,
  signup,
  signupOpen,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Mutation mutation={SIGNIN_MUTATION} variables={{ email, password }}>
      {(updateSandwich, { loading, error }) => {
        return (
          <StyledSignup signupOpen={signupOpen}>
            <StyledSignInForm onSubmit={() => {}}>
              <fieldset disabled={loading} aria-busy={loading}>
                {/* <Error error={error} /> */}
                <h3>Sign In</h3>
                <p>
                  Don't have an account?{" "}
                  <ButtonLink onClick={() => setSignup(!signup)}>
                    Sign Up
                  </ButtonLink>
                </p>
                <label htmlFor="email">
                  Email
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email address."
                    required
                    onChange={(e) => setEmail(e.target.val)}
                  />
                </label>

                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Select a password."
                    required
                    onChange={(e) => setPassword(e.target.val)}
                  />
                </label>
                <ButtonBox>
                  <button type="submit">
                    Sav{loading ? "ing" : "e"} Changes
                  </button>
                  <button onClick={handleClick}>Cancel</button>
                </ButtonBox>
              </fieldset>
            </StyledSignInForm>
          </StyledSignup>
        );
      }}
    </Mutation>
  );
}
