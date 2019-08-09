import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const TitleTextBox = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 75px;
  justify-content: center;
  width: 100%;
  text-align: center;
  background-color: black;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
  }

  p,
  a {
    color: white;
    margin-top: 0;
  }
  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <TitleTextBox>
      <h1
        css={css`
          color: white;
          font-size: 1rem;
        `}
      >
        <span
          css={css`
            font-size: 0.8rem;
            transform: rotate(310deg) translate(0.7rem, 0.2rem);
            display: inline-flex;
            color: white;
          `}
        >
          The
        </span>{' '}
        Obsessionists
      </h1>
    </TitleTextBox>
  );
};

export default Hero;
