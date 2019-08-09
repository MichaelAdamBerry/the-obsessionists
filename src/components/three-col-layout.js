import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import AuthorLink from './author-link';
import styled from '@emotion/styled';

// TopSection Component

// LAYOUT - three column fomat Large /  small / small  with button underneath

// PROPS - title=[<title for large> , <title for middle small> , <title for outside small > ],

const SignUpBox = () => {
  return (
    <div
      css={css`
        padding: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-rows: 33% 33% 33%;
        background: rgba(123, 183, 184, 0.73);
        background: -moz-linear-gradient(
          -45deg,
          rgba(123, 183, 184, 0.73) 0%,
          rgba(123, 183, 184, 1) 0%,
          rgba(123, 183, 184, 0.93) 41%,
          rgba(95, 181, 183, 0.85) 83%,
          rgba(86, 180, 183, 0.85) 97%
        );
        background: -webkit-gradient(
          left top,
          right bottom,
          color-stop(0%, rgba(123, 183, 184, 0.73)),
          color-stop(0%, rgba(123, 183, 184, 1)),
          color-stop(41%, rgba(123, 183, 184, 0.93)),
          color-stop(83%, rgba(95, 181, 183, 0.85)),
          color-stop(97%, rgba(86, 180, 183, 0.85))
        );
        background: -webkit-linear-gradient(
          -45deg,
          rgba(123, 183, 184, 0.73) 0%,
          rgba(123, 183, 184, 1) 0%,
          rgba(123, 183, 184, 0.93) 41%,
          rgba(95, 181, 183, 0.85) 83%,
          rgba(86, 180, 183, 0.85) 97%
        );
        background: -o-linear-gradient(
          -45deg,
          rgba(123, 183, 184, 0.73) 0%,
          rgba(123, 183, 184, 1) 0%,
          rgba(123, 183, 184, 0.93) 41%,
          rgba(95, 181, 183, 0.85) 83%,
          rgba(86, 180, 183, 0.85) 97%
        );
        background: -ms-linear-gradient(
          -45deg,
          rgba(123, 183, 184, 0.73) 0%,
          rgba(123, 183, 184, 1) 0%,
          rgba(123, 183, 184, 0.93) 41%,
          rgba(95, 181, 183, 0.85) 83%,
          rgba(86, 180, 183, 0.85) 97%
        );
        background: linear-gradient(
          135deg,
          rgba(123, 183, 184, 0.73) 0%,
          rgba(123, 183, 184, 1) 0%,
          rgba(123, 183, 184, 0.93) 41%,
          rgba(95, 181, 183, 0.85) 83%,
          rgba(86, 180, 183, 0.85) 97%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7bb7b8', endColorstr='#56b4b7', GradientType=1 );
        box-shadow: 5px 10px 10px #4d727344;

        h5 {
          color: white;
        }
        span {
          color: var(--red);
          font-size: 1.2rem;
        }
      `}
    >
      <div
        css={css`
          grid-row: 1/4;
          grid-column: 1/3;
          justify-self: center;
          align-self: center;
        `}
      >
        <h5>
          <span>Sign Up </span> for Updates
        </h5>
      </div>
      <div
        css={css`
          grid-row: 1/4;
          grid-column: 3/5;
          justify-self: center;
          align-self: center;
        `}
      >
        <input type="text"></input>
      </div>
    </div>
  );
};

const OverlayText = styled.div`
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
  z-index: 100;
  color: ${props => (props.textCol ? props.textCol : `#000`)};
  align-self: start;
 
  display: flex;
  flex-direction: column;
  justify-content: flex-end;


  & .text-box, .tags {
    background-color: ${props => (props.textBg ? props.textBg : `#fff`)};
  }

  a {
    text-decoration: none;
  }


  h3 {
    margin-top: 0;
    margin-bottom: 0;
 
  }


  .tags {
    display: ${props => (props.small ? `none` : 'block')}
    margin-top: 0.5rem;
    font-style: italic;
    padding-left: 2rem;
    font-size: 0.6rem;
    text-align: right;
  }



  .tags p.tag-items {
    font-size : ${props => (props.small ? `.7rem` : `.75rem`)};
    text-align: left;
    color: #f78181;
    font-style: normal;
  }

  @media (max-width: 475px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const ImageBackground = styled(BackgroundImage)`
  background-size: cover;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
  box-shadow: 3px 2px 14px #22222244;
  z-index: 10l;
  @media (max-width: 475px) {
    min-height: 400px;
  }
  @media (max-width: 425px) {
    min-height: 375px;
  }

  @media (max-width: 375px) {
    min-height: 325;
  }

  @media (max-width: 320px) {
    min-height: 300px;
  }
`;

const ThreeColLayout = ({ postArray, buttonObj }) => {
  console.log(postArray);
  return (
    <section
      className="content-boundary"
      css={css`
        width: 100%;
        margin-top: 100px;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 23% 23% 23% 23%;
        grid-column-gap: 2.6%;

        @media (max-width: 1025px) {
          grid-template-columns: 150px 150px 1fr 1fr;
          grid-template-rows: 150px 150px 1fr;
        }

        @media (max-width: 768px) {
          margin-top: 0;
        }
        @media (max-width: 700px) {
          grid-template-columns: 100px 100px 1fr 1fr;
          grid-template-rows: 100px 100px 1fr;
        }
        @media (max-width: 475px) {
          display: block;
          width: 90%;
          margin: auto;
        }
      `}
    >
      <ImageBackground
        Tag="div"
        fadeIn={true}
        fluid={postArray[0].image.sharp.fluid}
        alt={postArray[0].title}
        col={`1/3`}
        row={`1/3`}
      />

      <OverlayText col={`1/3`} row={`3/4`}>
        {' '}
        <div
          css={css`
            p {
              color: #7d7d7d;
            }
            h1,
            p {
              margin: 3px 0;
            }
          `}
        >
          <div>
            <span
              css={css`
                color: var(--green);
                font-size: 0.8rem;
                text-transform: uppercase;
              `}
            >
              {postArray[0].subsection}
            </span>
          </div>
          <Link to={postArray[0].slug}>
            <h1
              css={css`
                font-size: 2rem;
                a {
                  color: var(--headline);
                  :hover {
                    color: var(--red);
                  }
                }

                @media (max-width: 700px) {
                  font-size: 1rem;
                }
              `}
            >
              {postArray[0].title}
            </h1>
          </Link>
          <p>{postArray[0].excerpt}</p>
          <AuthorLink name={postArray[0].author} />
        </div>
      </OverlayText>

      <ImageBackground
        Tag="div"
        fadeIn={true}
        fluid={postArray[1].image.sharp.fluid}
        alt={postArray[1].title}
        row={`1/2`}
        col={`3/4`}
      />
      <OverlayText col={`3/4`} row={`2/3`}>
        {' '}
        <div
          css={css`
            p {
              color: #7d7d7d;
            }
            h1,
            p {
              margin: 3px 0;
            }
          `}
        >
          <div>
            <span
              css={css`
                color: var(--green);
                font-size: 0.8rem;
                text-transform: uppercase;
              `}
            >
              {postArray[1].subsection}
            </span>
          </div>
          <Link to={postArray[1].slug}>
            <h3
              css={css`
                font-size: 1.5rem;
                color: #3b3b3b;
                :hover {
                  color: #f78181;
                }
                @media (max-width: 700px) {
                  font-size: 1rem;
                }
              `}
            >
              {postArray[1].title}
            </h3>
          </Link>
          <p>{postArray[1].excerpt}</p>
          <AuthorLink name={postArray[1].author} />
        </div>
      </OverlayText>

      <ImageBackground
        Tag="div"
        fadeIn={true}
        fluid={postArray[2].image.sharp.fluid}
        alt={postArray[2].title}
        row={`1/2`}
        col={`4/5`}
      />
      <OverlayText col={`4/5`} row={`2/3`}>
        {' '}
        <div
          css={css`
            p {
              color: #7d7d7d;
            }
            h1,
            p {
              margin: 3px 0;
            }
          `}
        >
          <div>
            <span
              css={css`
                color: var(--green);
                font-size: 0.8rem;
                text-transform: uppercase;
              `}
            >
              {postArray[2].subsection}
            </span>
          </div>
          <Link to={postArray[2].slug}>
            <h3
              css={css`
                font-size: 1.5rem;
                color: #3b3b3b;
                :hover {
                  color: #f78181;
                }
                @media (max-width: 700px) {
                  font-size: 1rem;
                }
              `}
            >
              {postArray[2].title}
            </h3>
          </Link>
          <p>{postArray[2].excerpt}</p>
          <AuthorLink name={postArray[2].author} />
        </div>
      </OverlayText>
      <div
        css={css`
          display: ${buttonObj.display};
          grid-row: 3/4;
          grid-column: 3/5;
          display: flex;
          flex-direction: column;
          justify-content: center;

          @media (max-width: 1024px) {
            justify-content: flex-end;
          }
        `}
      >
        <SignUpBox />
      </div>
    </section>
  );
};

export default ThreeColLayout;
