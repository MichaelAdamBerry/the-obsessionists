import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import SectionTitle from '../components/section-title';

import TvMainContent from '../components/tv-main-content';
const TV = () => {
  const allPosts = usePosts();
  console.log(allPosts);
  const tvPosts = allPosts.filter(d => d.subsection === 'tv');
  console.log('culture posts :', tvPosts);

  return (
    <Layout>
      <div className="content-boundary">
        <SectionTitle pgHeader>
          <h3>TV</h3>
          <div className="line-accent"></div>
        </SectionTitle>
      </div>
      <TvMainContent />
    </Layout>
  );
};

export default TV;
