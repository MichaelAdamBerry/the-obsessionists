import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import Readlink from '../components/read-link';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <div className="post-content-boundary">
      <h1>{post.frontmatter.title}</h1>
      <p
        css={css`
          font-size: 0.75rem;
        `}
      >
        Posted by {post.frontmatter.author}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <Readlink to="/">&larr; back to all posts</Readlink>
    </div>
  </Layout>
);

export default PostTemplate;
