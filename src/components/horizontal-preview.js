import styled from '@emotion/styled';

import React from 'react';
import { Link } from 'gatsby';
import AuthorLink from './author-link';

import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  width: 30%;

  @media (max-width: 475px) {
    min-width: 120px;
    min-height: 120px;
  }

  @media (max-width: 375px) {
    min-width: 100px;
    min-height: 100px;
  }
`;

const HorizontalPreview = styled.article`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  border-top: 1px solid #d1d1d1;
  box-shadow: 1px 1px 3px #e9e9e999;

  :focus,
  :hover {
    box-shadow: 0 2px 14px #22222244;
    z-index: 10l;
  }

  .text-container {
    width: 70%;
    flex-grow: 1;
    padding: 16px;
    background-color: white;
  }

  h5 {
    color: var(--green);
    text-transform: uppercase;
    margin: 0;
  }

  p {
    color: #7d7d7d;
    font-size: 0.8rem;
  }

  span {
    color: var(--pink);
  }

  @media (max-width: 1025px) {
    max-height: 150px;

    h3 {
      margin: 0.5rem 0;
    }

    .text-container {
      padding: 5px 0 0 16px;
    }
  }

  @media (max-width: 475px) {
    max-height: 120px;

    h5 {
      font-size: 10px;
      text-align: right;
      margin-right: 1rem;
    }

    h3 {
      font-size: 1rem;
      margin: 3px 0;/
    }

    p {
      margin: 0;
      font-size: 10px;
    }
  }
  @media (max-width: 375px) {
    max-height: 100px;
    min-height: 100px;

    h5 {
      display: none;
    }

    h3 {
      font-size: 13px;
    }

`;

const HorizontalPreviewCard = ({ post }) => {
  return (
    <>
      <HorizontalPreview>
        <ImageBackground
          Tag="div"
          fadeIn={true}
          fluid={post.image.sharp.fluid}
          alt={post.title}
        />
        <div className="text-container">
          <h5>{post.subsection}</h5>
          <Link to={post.slug}>
            <h3>{post.title}</h3>
          </Link>
          <p>{post.excerpt}</p>
          <AuthorLink name={post.author} />
          <p>{post.exerpt}</p>
        </div>
      </HorizontalPreview>
    </>
  );
};

export default HorizontalPreviewCard;
