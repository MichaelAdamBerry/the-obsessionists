import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';
import Footer from './footer';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
          :root {
            --pink: #c73237;
            --headline: 'Montserrat', sans-serif;
            --muted-black: #3b3b3b;

            --orange: #e9e581;
            --off-white: #e7e7e7;
            --blue: #56b4b7;
            --red:  #c73237;
            --green: #87b748;
          }
          * {
            box-sizing: border-box;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 16px;
            line-height: 1.4;
            font-family: 'IBM Plex Serif', serif;
          }

          span.gatsby-resp-image-background-image {
            padding-bottom: 0 !important;
          }

          strong {
            font-family: 'Vesper Libre', serif;
          }

          h1,
          h2,
          h4,
          h5,
          h3,
          h6 {
            font-family: var(--headline);

            color: var(--muted-black);
            line-height: 1.1;
          }

          h1 {
            font-size: 2.6rem;
          }
          strong {
            color: #222;
          }
          li {
            marigin-top: 0.25rem;
          }

          .content-boundary {
            max-width: 1000px;
            margin: 0 auto;
          }

          .post-content-boundary {
            max-width: 700px;
            margin: auto;
          }

          @media (max-width: 1025px) {
            .content-boundary {
              max-width: 800px;
            }

          @media (max-width: 700px) {
            .content-boundary { 
              max-width: 600px;

            p {
              font-size: .8rem;
            }
          }
        
        
        
            `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif|Vesper+Libre&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
