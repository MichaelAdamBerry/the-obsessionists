import React from 'react';
import { css } from '@emotion/core';
import LatestPostsLists from './latest-posts-list';
import SectionTitle from './section-title';
import Video from './video';
const MainBody = () => {
  return (
    <div
      className="content-boundary"
      css={css`
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 70% 30%;
        grid-column-gap: 3rem;
        grid-template-rows: 1fr 1fr;

        @media (max-width: 1025px) {
          grid-column-gap: 1rem;
        }
        @media (max-width: 768px) {
          display: block;
          margin: 0 2rem;
        }

        @media (max-width: 425px) {
          margin: 0;
        }
      `}
    >
      <div
        css={css`
          grid-column: 1/2;
          grid-row: 1 / 3;
        `}
      >
        {' '}
        <SectionTitle>
          <h3>Latest Posts</h3>
          <div className="line-accent"></div>
        </SectionTitle>
        <LatestPostsLists />
      </div>

      <div
        css={css`
          grid-column: 2/3;
          grid-row: 1/3;
          width: 100%;
        `}
      >
        <section
          className="main-side"
          css={css`
            width: 100%;
            margin: auto;

            p {
              font-family: var(--headline);
              font-size: 0.8rem;
              font-weight: 800;
              border-bottom: solid;
              padding-bottom: 1rem;
              border-color: var(--red);
            }
            p:last-of-type {
              border-bottom: none;
            }

            h4 {
              margin: 0.5rem 0;
            }
            h5 {
              margin: 0;
            }
          `}
        >
          <SectionTitle
            css={css`
              text-align: center;
            `}
          >
            <h3>Watch This</h3>
            <div
              css={css`
                margin-bottom: 1rem;
                margin: auto;
              `}
              className="line-accent"
            ></div>
          </SectionTitle>

          <h4>What Movies Get Right and Wrong About Time Travel</h4>
          <h5>From Slate</h5>
          <Video
            videoSrcURL="https://www.youtube.com/embed/hVR8BIvoPcs"
            videoTitle={`Back to the Future" Gets Time Travel Wrong. "The Terminator" Gets It Right. Here's the Difference.`}
          />

          <h4>What a Trailer</h4>
          <Video
            videoSrcURL="https://www.youtube.com/embed/EM0VwEkxWTg"
            videoTitle="Hot Tub Time Machine Trailer"
          />
          <p>
            "...It's a Hot Tub Time Machine" is The Greatest Line in a Trailer
            This Side of Snakes on a Plane
          </p>

          <h4>Travellers of both Time and Space</h4>
          <Video
            videoSrcURL="https://www.youtube.com/embed/hW_WLxseq0o"
            videoTitle="Led Zeppellin Perform Kashmir 1979"
          />
          <p>WATCH: Led Zeppellin perform Kashmir(1979)</p>
          <h4>Back in Time</h4>
          <Video
            videoSrcURL="https://www.youtube.com/embed/TLQWGoysbgM"
            videoTitle="Huey Lewis and the News - Back in Time Music Video "
          />
          <p>Back to the Futue and 2x Huey Lewis</p>
        </section>
      </div>
    </div>
  );
};

export default MainBody;
