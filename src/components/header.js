import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import SocalButtons from './social-buttons';
import Hero from './hero';

const NavLink = styled(Link)`
  margin: 0 0.5 0 0;
  padding: 0.25rem;
  text-decoration: none;
  font-weight: 800;
  font-family: var(--headline);
  font-size: 14px;
  color: var(--headline);
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.current-page {
    font-weight: bold;
    text-decoration: underline;

    text-decoration-color: var(--red);
    display: none;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <>
    <header
      css={css`
        display: flex;
        padding: 0 5%;
        background-color: black;
        justify-content: space-between;
        color: white;
        max-height: 75px;
      `}
    >
      <div>
        <Hero />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <NavLink to="/about/" activeClassName="current-page">
          About
        </NavLink>
        <SocalButtons />
      </div>
    </header>
  </>
);
export default Header;
