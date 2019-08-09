import React from 'react';
import { css } from '@emotion/core';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div
    className="video"
    css={css`
      min-height: 200px;
      display: flex;
      margin-top: 1rem;
      justify-content: center;

      @media (max-width: 1025px) {
        min-height: 150px;
        margin-left: 1rem;
        margin-top: 1.3rem;
      }

      @media (max-width: 768px) {
        display: inline-flex;
        margin-left: 0;
        margin-right: 1rem;
      }
      @media (max-width: 700px) {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
      }
    `}
  >
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

export default Video;
