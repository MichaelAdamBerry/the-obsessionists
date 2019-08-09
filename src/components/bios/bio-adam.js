import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const BioAdam = () => {
  return (
    <div
      className="content-boundary"
      css={css`
      margin-bottom: 1.5rem;

    h3 {font-style: italic;
    }
    p {
        margin-bottom: 0;
        margin-top:.3rem;
    }
    }
  `}
    >
      <h1>Adam Berry</h1>
      <h3>Web Developer, Creator</h3>
      <p>
        Obsessions include: Web Development, James Bond Films, Speculative
        Fiction, The Grateful Dead, and dogs.
      </p>
      <p>
        Adam also writes web development and the techical aspects of this blog
        at{' '}
        <Link
          to="/development"
          css={css`
            text-decoration: underline;
          `}
        >
          Technically Obsessed
        </Link>
      </p>
      <p>
        If you are in need of a website or a web developer to join you team,
        don't hesitate to get in touch.
      </p>
    </div>
  );
};
export default BioAdam;
