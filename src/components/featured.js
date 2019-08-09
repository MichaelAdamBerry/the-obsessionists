import React from 'react';
import { css } from '@emotion/core';
//import BackgroundImage from 'gatsby-background-image';
import FeaturedPostPreview from './featured-post-preview';
import SectionTitle from '../components/section-title';

const Featured = ({ slug }) => {
  return (
    <>
      <SectionTitle>
        <div
          className="content-boundary"
          css={css`
            padding: 1rem 0;
          `}
        >
          <h3>Featured Debate</h3>
          <div className="line-accent"></div>
        </div>
      </SectionTitle>
      <div
        css={css`
          display: grid;
          grid-template-columns: 15% 5% 46% 5% 29%;
          grid-template-rows: 1fr;
        `}
      >
        <div
          css={css`
            grid-column: 1/3;
            grid-row: 1;
            opacity: 0.6;
            margin-top: 50px;

            @media (max-width: 425px) {
              display: none;

              img {
                display: none;
              }
            }
          `}
        >
          <img src="../images/clocks-1.svg" />
        </div>

        <div
          css={css`
            opacity: 0.6;
            grid-column: 4/6;
            grid-row: 1;
            margin-top: 50px;

            @media (max-width: 425px) {
              display: none;

              img {
                display: none;
              }
            }
          `}
        >
          <img src="../images/time-machine-1.svg" />
        </div>
        <div
          css={css`
            grid-column: 2/5;
            grid-row: 1;
            box-shadow: 10px 10px 20px #2f2f2f55;

            @media (max-width: 425px) {
              grid-column: 1/6;
            }
          `}
        >
          <FeaturedPostPreview slug={slug} />
        </div>
      </div>
    </>
  );
};

export default Featured;
