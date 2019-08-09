import React from 'react';
import { css } from '@emotion/core';

const Spotify = ({ src, title }) => {
  return (
    <div
      className="spotify-container"
      css={css`
        position: relative;
        iframe,
        object,
        embed {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}
    >
      <h3>Spotify iFrame will go here</h3>
    </div>
  );
};

export default Spotify;
