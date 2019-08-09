import React from 'react';
import { css } from '@emotion/core';
import usePosts from '../hooks/use-posts';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const FeaturedPostPreview = ({ slug }) => {
  const allPosts = usePosts();

  const currentMain = allPosts.find(d => d.slug === slug);

  if (currentMain === undefined) {
    console.error(
      'Careful! FeaturedPostPreview component should have props slug that matches a post. Slug has not been found',
    );
  }
  return (
    <section
      css={css`
        width: 100%;
        height: 100%;
        a {
          text-decoration: none;
          color: white;
        }
      `}
    >
      <Link to={currentMain.slug}>
        <div
          css={css`
            display: grid;
            width: 100%;
            height: 100%;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
          `}
        >
          <div
            css={css`
              grid-column: 1/5;
              grid-row: 1/4;
            `}
          >
            <Image
              fluid={currentMain.image.sharp.fluid}
              alt={currentMain.title}
            />
          </div>
          <div
            css={css`
              grid-row: 1/4;
              grid-column: 1/5;
              background: linear-gradient(
                to bottom,
                transparent 0,
                rgba(0, 0, 0, 0.1) 20%,
                rgba(0, 0, 0, 0.3) 60%,
                rgba(0, 0, 0, 0.75) 100%
              );
              background: -webkit-linear-gradient(
                top,
                transparent 0,
                rgba(0, 0, 0, 0.1) 20%,
                rgba(0, 0, 0, 0.3) 60%,
                rgba(0, 0, 0, 0.75) 100%
              );
              background: -moz-linear-gradient(
                top,
                rgba(0, 0, 0, 0) 0,
                rgba(0, 0, 0, 0.1) 20%,
                rgba(0, 0, 0, 0.3) 60%,
                rgba(0, 0, 0, 0.75) 100%
              );
              z-index: 10;
            `}
          ></div>
          <div
            className="text"
            css={css`
              grid-row: 2/3;
              grid-column: 2/4;
              z-index: 20;
              justify-self: center;
              align-self: end;
              p {
                font-size: 1.2rem;
                color: white;
              }

              h2 {
                font-size: 1.7rem;
                color: white;
              }
            `}
          >
            {' '}
            <h2>{currentMain.title}</h2>
            <p>{currentMain.author}</p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FeaturedPostPreview;
