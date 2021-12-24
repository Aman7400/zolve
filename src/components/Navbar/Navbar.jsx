import React from "react";
import styled from "styled-components";
import Btn1 from "../Button/Btn1";

const Wrapper = styled.nav`
  background-color: var(--dark-blue);
  padding: 2rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--desktop-nav);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Logo = styled.section`
  width: 145px;
  img {
    max-width: 100%;
    height: auto;
  }
`;
const NavMenu = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  color: #fff;

  li {
    display: block;
    padding: 1rem;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      {/* Logo */}
      <Logo>
        <img src="/assets/zolve_logo_w.svg" alt="Zolve Logo" />
      </Logo>
      {/* Nav Links */}
      <NavMenu>
        <li>Products</li>
        <li>About Us</li>
        <li>Refer a Friend</li>
        <li>Help</li>
        <li>Learn</li>
        <li>Login</li>
        {/* <li>Get Started</li> */}
        <Btn1 title="Get Started" size="md" />
      </NavMenu>
    </Wrapper>
  );
};

export default Navbar;
