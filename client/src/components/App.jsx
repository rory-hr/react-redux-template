import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
  }

  button {
    /* background: none; */
    /* outline:  none; */
  }
`;

const Container = styled.div`

`;

export default () => {
  return (
    <Container>
      <GlobalStyle />
      <h3>APP</h3>
    </Container>
  );
};