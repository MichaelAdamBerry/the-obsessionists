import styled from '@emotion/styled';

const SectionTitle = styled.div`
  h3 {
    font-size: ${props => (props.pgHeader ? `1.5rem` : `1rem`)};
    margin: 1rem 0 0.3rem 0;
  }
  div.line-accent {
    line-height: 3px;
    width: ${props => (props.pgHeader ? `5rem` : `3rem`)};
    border-top: solid 2px #f78181;
  }
`;

export default SectionTitle;
