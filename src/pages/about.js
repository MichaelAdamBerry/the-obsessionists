import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Video from '../components/video';
import { css } from '@emotion/core';

export default () => (
  <Layout>
    <div
      className="content-boundary"
      css={css`
        p {
          max-width: 500px;
          padding-bottom: 2rem;
          font-family: var(--headline);
          font-weight: 800;
        }
      `}
    >
      <h1>The Obsessionists</h1>
      <p>
        The Obsessionists is a collective of movie junkies, actors, writers,
        tech enthusiasts, and generally creative folks bringing you original and
        curated content about pop culture, technology, politics, and other
        things we obsess over.
      </p>

      <p>
        Each month we focus our ODC tendencies towards a single topic examining
        the stories tell and why we tell them. Our first volume,{' '}
        <i>On Time Travel</i> was released in September of 2019. If you like the
        work we are doing, we appreciate any blasts on the social medias. We
        will continue to release new content between volumnes, so be sure to
        subscribe from updates.
      </p>

      <div>
        <h3>The Team</h3>
        <ul
          css={css`
            list-decoration: none;
            padding: 0;
          `}
        >
          <li>
            <h4>@Adam - Creator, Web Developer, Contributor</h4>
            <p>
              Adam dreamed of this site when he fell while standing on his
              toilet trying to hang a picture in his bathroom. He awoke with a
              vision and wrote all of the code in a single sitting. His laptop
              was in the shop, so he wrote the code by hand on long scroll of
              printer paper Karouac-style. The code was bug free.
            </p>
          </li>
          <li>
            <h4>@Greg - Contributor, Editorial Elder, Guidance Counselor</h4>
            <p>
              Greg splits his time between Nantucket and his hedge fund office
              in New York. He felt like he should be "giving back" so he agreed
              to dust off that English major and help structure the ravings of
              this group into some sort of cohesive narritve. In his role as
              guidence couselor he makes sure the team always eats breakfast.
            </p>
          </li>
          <li>
            <h4>@Joe - Foreign Coorespondent</h4>
            <p>
              No one knows who Joe is or how he got our addresses. One day we
              all recieved a letter with instructions to a safety deposit box.
              Inside the box were a series of post-its and napkins with really
              grade-A, top-notch content. So we don't ask questions and the box
              is refilled when we check every month. We started calling him/her
              Joe for the sake of brevity.
            </p>
          </li>
          <li>
            <h4>@Will - Contributor, Team Magician</h4>
            <p>
              Will was raised in a travelling carvival where he excelled at an
              early age, mastering the trades of ticket taking, and carousel
              saftey advisor. He dreams of being in the movies one day, or
              perhaps Broadway even. Someday, Will, someday
            </p>
          </li>
        </ul>
        <div
          css={css`
            border-top: solid 2px var(--pink);

            p {
              font-size: 0.6rem;
              opacity: 0.7;
            }
            span {
              font-style: italic;
            }
          `}
        >
          <h3>Our Motivational Videos.</h3>
          <Video
            videoSrcURL="https://www.youtube.com/embed/hW008FcKr3Q?controls=0"
            videoTitle="These Go to Eleven"
          />
          <p>
            'These go to Eleven' from <span>This Is Spinal Tap</span>
          </p>
        </div>

        <Link to="/"> &larr; back to home</Link>
      </div>
    </div>
  </Layout>
);
