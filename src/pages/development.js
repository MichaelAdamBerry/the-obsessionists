import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import SectionTitle from '../components/section-title';
import { css } from '@emotion/core';
import PostPreview from '../components/post-preview';
import FeaturedPostPreview from '../components/featured-post-preview';

const Development = () => {
  const allPosts = usePosts();
  const devPosts = allPosts.filter(d => d.section === 'development');

  return (
    <Layout>
      <div className="content-boundary">
        <SectionTitle pgHeader>
          <h3>Technically Speaking</h3>
          <div className="line-accent"></div>
        </SectionTitle>
      </div>
      <div
        css={css`
          background-color: #f7f7f7;
        `}
      >
        <div className="content-boundary">
          <p>Latest posts about technology and web development in 2019</p>
          <section
            css={css`
              display: grid;
              grid-gap: 2rem;
              grid-template-columns: 1fr 1fr 1.5fr;
              grid-tmeplate-rows: 1fr 1fr;
              min-height: 60vh;
              margin: 1rem 0;
            `}
          >
            <div
              css={css`
                grid-row: 1/2;
                grid-column: 1/3;
                box-shadow: 1px 1px 3px #e9e9e999;
              `}
              className="box-a"
            >
              <FeaturedPostPreview slug={devPosts[0].slug} whiteText={true} />
            </div>
            <div
              css={css`
                grid-row: 2/3;
                grid-column: 1/2;
                box-shadow: 1px 1px 3px #e9e9e999;
              `}
              className="box-b"
            >
              <PostPreview post={devPosts[1]} />
            </div>
            <div
              css={css`
                grid-row: 2/3;
                grid-column: 2/3;
                box-shadow: 1px 1px 3px #e9e9e999;
              `}
              className="box-c"
            >
              <PostPreview post={devPosts[2]} />
            </div>
            <div
              css={css`
                grid-row: 1/3;
                grid-column: 3/4;
                border: 1px solid #939393;
                padding: 1rem;

                & ul {
                  list-style-type: none;
                  padding-left: 0;
                }
              `}
              className="box-d"
            >
              <SectionTitle>
                <h3>Those Links</h3>
                <div className="line-accent"></div>
              </SectionTitle>
              <ul>
                <li>link to something</li>
                <li>another link</li>
              </ul>
            </div>
          </section>
          <Link to="/"> &larr; back to home</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Development;
