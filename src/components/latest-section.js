import React from 'react';
import usePosts from '../hooks/use-posts';
import { css } from '@emotion/core';
import PostPreview from './post-preview';
import SectionTitle from './section-title';

const LatestSection = () => {
  const getPostsFromTitles = () => {
    const titles = [
      'Best Movie Time Machines',
      'Dr. Who - Space-Time Pioneer',
      'The Real Winner of Back to the Future - A Case for Huey Lewis',
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
  const posts = getPostsFromTitles();

  return (
    <>
      <div
        className="content-boundary"
        css={css`
          margin: 3rem auto;
          margin-bottom: 0;
          border-top: solid var(--pink);
        `}
      >
        <SectionTitle
          css={css`
            @media (max-width: 475px) {
              h3 {
                text-align: center;
              }
              div {
                margin: auto;
              }
            }
          `}
        >
          <h3 className="content-boundary">The Latest</h3>
          <div className="line-accent"></div>
        </SectionTitle>
      </div>
      <section
        className="latest"
        css={css`
          background-color: var(--off-white);
          padding: 1rem 0;
        `}
      >
        <div
          className="content-boundary"
          css={css`
            width: 100%;
            margin: 1rem auto;
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 31.3% 31.3% 31.3%;
            grid-column-gap: 2%;

            @media (max-width: 768px) {
              display: block;
              margin: auto;
            }
          `}
        >
          {posts.map((post, indx) => (
            <PostPreview key={post.slug} post={post} col={indx + 1} />
          ))}
        </div>
      </section>
    </>
  );
};

export default LatestSection;
