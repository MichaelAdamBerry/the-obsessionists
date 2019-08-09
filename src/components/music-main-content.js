import React from 'react';
import usePosts from '../hooks/use-posts';
import ThreeColLayout from './three-col-layout';

function MusicMainContent() {
  const buttonObj = {
    display: 'none',
    color: '#c73237',
    bgColor: '#56b4b7',
    name: 'Get on the List',
    onClick: () =>
      console.log('button was clicked - function source top-section'),
  };

  const getPostsFromTitles = () => {
    const titles = [
      'Twelve Hours With Led Zeppelin',
      'Listen Up -> Garcias People',
      'Beyond the Dead, Week One',
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

  return <ThreeColLayout postArray={postArray} buttonObj={buttonObj} />;
}

export default MusicMainContent;
