import React from 'react';
import ThreeColLayout from './three-col-layout';
import usePosts from '../hooks/use-posts';
import { css } from '@emotion/core';
// TopSection Component

// LAYOUT - three column fomat Large /  small / small  with button underneath

// PROPS - slugs=[<slug for large> , <slug for middle small> , <slug for outside small > ],
//  & button={
//   name: <string button text> ,
//   onClick: <function to happen when button clicked>,
//   bgColor: <button background color>,
//   color: <Text Color>
//   }

// background-image: url(../images/time-travel-title-card-lg.svg);
// background-repeat: no-repeat;
// background-size: cover;
// background-position: center;

const TopSection = () => {
  const buttonObj = {
    display: 'block',
    color: '#c73237',
    bgColor: '#56b4b7',
    name: 'Get on the List',
    onClick: () =>
      console.log('button was clicked - function source top-section'),
  };

  const getPostsFromTitles = () => {
    const titles = [
      'A Note on Time Traveling',
      'Best Movie Time Machines',
      'A Note on Time Traveling',
    ];
    console.log('titles', titles);
    const posts = usePosts();
    console.log('posts', posts);
    return titles.map((d, i) => {
      let temp = posts.find(k => {
        return k.title === d;
      });
      if (temp === undefined) {
        console.error(
          'TITLE NOT FOUND. Check the title array to ensure titles are valid',
        );
      }
      return temp;
    });
  };
  const postArray = getPostsFromTitles();

  console.log('postArray = ', getPostsFromTitles());

  return (
    <>
      <div
        css={css`
          min-height: 100vh;
          width: 100%;
          display: grid;
          grid-template-column: 50% 50%;
          grid-template-rows: 1fr;
          margin-bottom: 2rem;

          @media (max-width: 600px) {
            display: block;
          }
        `}
      >
        <div
          css={css`
            grid-row: 1;
            grid-column: 1/2;
          `}
        >
          <img
            alt="text poster reading obessionists volume one : time travel"
            src="../images/time-travel-text-main-title-card.svg"
          />
        </div>
        <div
          css={css`
            grid-row: 1;
            grid-column: 2/3;
            background-image: url('../images/time-travel-poster-1.png');
            background-size: cover;
          `}
        ></div>
      </div>

      <h2
        css={css`
          text-align: center;
          margin-top: 2rem;
          padding-top: 1rem;
          border-top: solid var(--red);
          max-width: 700px;
          margin: auto;
        `}
      >
        {' '}
        The obession-ists <br></br> breaking down the stories we tell one idea
        at a time.
      </h2>

      <ThreeColLayout postArray={postArray} buttonObj={buttonObj} />
    </>
  );
};

export default TopSection;
