import React from "react";
import styled from "styled-components";
//React-router
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <Link id="logo" to="/">
        PixelClear
      </Link>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/movies">2. Movies</Link>
        </li>
        <li>
          <Link to="/contact">4. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  min-height: 10vh;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  background: #282828;
  ul {
    display: flex;
    list-style: none;
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }

  li {
    padding-left: 5rem;
    position: relative;
  }
`;

export default Nav;
