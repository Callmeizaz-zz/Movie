import React, { useState } from "react";
import styled from "styled-components";
//import burger
import Burger from "../styles/BurgerNav";
//React-router
import { Link } from "react-router-dom";
// framer motion
import { motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <LogoStyled open={isOpen}>
        <Link id="logo" to="/">
          PixelClear
        </Link>
        <Burger open={isOpen} setOpen={setOpen} />
      </LogoStyled>
      <StyledNav open={isOpen}>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/movies">2. Movies</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </StyledNav>
    </React.Fragment>
  );
};

const StyledNav = styled(motion.ul)`
  display: flex;
  margin: auto;
  align-items: center;
  list-style: none;
  justify-content: space-evenly;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0%;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  li {
    position: relative;
  }

  ul {
    list-style: none;
  }

  @media (max-width: 768px) {
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    top: 0;
    z-index: 1;
    right: 0;
    background-color: #282828;
    width: 80%;
    a {
      font-size: 1.8rem;
    }
  }
`;
const LogoStyled = styled(motion.div)`
  display: flex;
  position: relative;
  padding: 1rem;
  justify-content: center;
  z-index: 10;
  background-color: #282828;
  #logo {
    top: 0;
    text-align: center;
    color: #fff;
    text-decoration: none;
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  @media (max-width: 768px) {
    background: ${({ open }) => (open ? "transparent" : "")};
    #logo {
      transform: ${({ open }) => (open ? "translateX(5%)" : "")};
      font-size: 3rem;
      transition: 0.2s all ease-in;
    }
  }
`;

export default Nav;
