import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import HorizontalPreview from '../components/horizontal-preview';
import BioAdam from '../components/bios/bio-adam';

export default ({ location }) => {
  const allPosts = usePosts();
  console.log('all posts at Adam.js', allPosts);
  console.log('location state value at Adam.js', location.state);
  const posts = allPosts.filter(d => d.author === location.state.currentAuthor);
  console.log(posts);

  return (
    <Layout>
      <div className="content-boundary">
        <BioAdam />
        <div>
          {posts.map(d => {
            return <HorizontalPreview post={d} key={d.slug} />;
          })}
        </div>
        <Link to="/"> &larr; back to home</Link>
      </div>
    </Layout>
  );
};
