import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import AuthorLink from './author-link';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  box-shadow: 3px 2px 14px #22222244;
  z-index: 10l;
  width: 300px;
  min-height: 300px;
`;

const PostPreveiw = ({ post, col }) => {
  const { lead } = post;
  let leadArr = lead.split('');
  let formatted =
    leadArr.length > 272 ? leadArr.slice(0, 272).join('') : leadArr.join('');
  return (
    <>
      <ImageBackground
        Tag="div"
        fadeIn={true}
        fluid={post.image.sharp.fluid}
        alt={post.title}
        css={css`
          grid-column: ${col} / ${col + 1};
          grid-row: 1/2;
        `}
      >
        <Link to={post.slug}></Link>
      </ImageBackground>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          min-height: 300px;
          max-height: 300px;
          overflow: hidden;

          justify-content: space-between;
          a {
            text-decoration: none;
            :hover {
              color: var(--pink);
            }
          }

          h3.post-preview-title a {
            color: var(--muted-black);
          }
        `}
        className="post-preview-text-container"
      >
        <div
          css={css`
            @media (max-width: 475px) {
              width: 90%;
              margin: auto;

              a {
                margin-right: 1rem;
              }
            }
          `}
        >
          <h3
            className="post-preview-title"
            css={css`
              margin-top: 0.3rem;
              margin-bottom: 0.3rem;
            `}
          >
            <Link to={post.slug}>{post.title}</Link>
          </h3>
          <AuthorLink name={post.author} />
          <div>
            <p
              css={css`
                margin-top: 0;
                margin-bottom: 0;
                padding: 1rem 0;
              `}
            >
              {formatted}...
            </p>
          </div>
        </div>
        <div
          css={css`
            text-align: right;
          `}
        ></div>
      </div>
    </>
  );
};

export default PostPreveiw;
