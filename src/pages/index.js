import React from 'react';
import LatestSection from '../components/latest-section';
import Layout from '../components/layout';
import TopSection from '../components/top-section';
import MainBody from '../components/main-body';
//import FullScreenPreviewSection from '../components/full-screen-preview-section';
import Featured from '../components/featured';

export default () => {
  return (
    <>
      <Layout>
        <TopSection />
        <LatestSection />
        <Featured slug="time-travel-top-ten" />
        <MainBody />
      </Layout>
    </>
  );
};

//TODO Adam Bio
//TODO Adam page layout

//TODO About The Eleven Content

//TODO Dark Post  text content
//TODO Dark graphics

//Media Queries

//TODO Keyframe animations for social buttons

//TODO Subscribe Form

//TODO Mail Chimp docs

//getting started with gatsby
//GreenSock for complex svg animations
//using keyframes for quick css animations
//the basics of graphQL

//TODO social media content for the eleven

//TODO gatsby analyze

//TODO deploy to netlify
