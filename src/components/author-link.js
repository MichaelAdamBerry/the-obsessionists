import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const AuthorLinkStyle = styled(Link)`
  display: inline-block;
  font-size: 0.875rem;
  color: var(--green);
  font-family: var(--headline);

  @media (max-width: 475px) {
    font-size: 10px;
  }
`;

const AuthorLink = ({ name }) => {
  console.log('name passed to AuthorLink', name);
  const firstName = name.split(' ')[0];
  return (
    <AuthorLinkStyle to={`/${firstName}`} state={{ currentAuthor: name }}>
      @{firstName}
    </AuthorLinkStyle>
  );
};

export default AuthorLink;
