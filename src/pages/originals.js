import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <div className="content-boundary">
      <h1>Originals</h1>
      <p>Original Content by the Eleven</p>
      <Link to="/"> &larr; back to home</Link>
    </div>
  </Layout>
);
