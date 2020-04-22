import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import styled from "styled-components";

import ALink from "./ALink";

const StyledNav = styled.nav`
  display: flex;

  @media (max-width: ${(props) => props.theme.tabletMQ}) {
    margin: 0 auto;
  }
`;

const Nav = () => {
  const router = useRouter();
  const [menuActive, setMenuActive] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [sellActive, setSellActive] = useState(false);
  const [ordersActive, setOrdersActive] = useState(false);
  const [accountActive, setAccountActive] = useState(false);

  const handleRouteChange = () => {
    setMenuActive(router.pathname === "/" ? true : false);
    setMenuActive(router.pathname === "/menu" ? true : false);
    setSignupActive(router.pathname === "/signup" ? true : false);
    setSellActive(router.pathname === "/sell" ? true : false);
    setOrdersActive(router.pathname === "/orders" ? true : false);
    setAccountActive(router.pathname === "/account" ? true : false);
  };

  useEffect(() => {
    if (router.pathname === "/") setMenuActive(true);
    if (router.pathname === "/menu") setMenuActive(true);
    if (router.pathname === "/signup") setSignupActive(true);
    if (router.pathname === "/sell") setSellActive(true);
    if (router.pathname === "/orders") setOrdersActive(true);
    if (router.pathname === "/account") setAccountActive(true);
  });

  Router.events.on("routeChangeComplete", handleRouteChange);

  return (
    <StyledNav>
      <ALink href="/menu" active={menuActive}>
        Menu
      </ALink>
      <ALink href="/sell" active={sellActive}>
        Sell
      </ALink>
      <ALink href="signup" active={signupActive}>
        Signup
      </ALink>
      <ALink href="orders" active={ordersActive}>
        Orders
      </ALink>
      <ALink href="account" active={accountActive}>
        Account
      </ALink>
    </StyledNav>
  );
};

export default Nav;
