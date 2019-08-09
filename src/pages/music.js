import React from 'react';
import Layout from '../components/layout';
import MusicMainContent from '../components/music-main-content';
import SectionTitle from '../components/section-title';

const Music = () => {
  return (
    <Layout>
      <div className="content-boundary">
        <SectionTitle pgHeader>
          <h3>Music</h3>
          <div className="line-accent"></div>
        </SectionTitle>
        <MusicMainContent />
      </div>
    </Layout>
  );
};

export default Music;
