import React from 'react';
import usePosts from '../hooks/use-posts';
import HorizontalPreview from './horizontal-preview';
import { css } from '@emotion/core';

const LatestPostsLists = () => {
  const allPosts = usePosts();
  console.log('all posts in main ten section ', allPosts);
  const posts = allPosts.filter(d => {
    console.log(d);
    return d.section === 'time-travel';
  });
  return (
    <section
      className="main-ten"
      css={css`
        margin-top: 1rem;
        a {
          text-decoration: none;
        }
      `}
    >
      {posts.map((d, i) => {
        return <HorizontalPreview key={d.slug} post={d} />;
      })}
    </section>
  );
};
export default LatestPostsLists;
