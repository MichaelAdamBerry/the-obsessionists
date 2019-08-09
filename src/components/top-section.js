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
      'Visual Aids : Dark Season 2',
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
        `}
      >
        <img
          alt="title card with illustration collage of charcters from films with time travel"
          src="../images/time-travel-title-card-3.svg"
        />{' '}
      </div>
      <ThreeColLayout postArray={postArray} buttonObj={buttonObj} />
    </>
  );
};

export default TopSection;
