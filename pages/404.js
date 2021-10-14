import React from 'react';
import styled from 'styled-components';

const PageNotFound = () => {
  return <Container>this is my custom 404 page</Container>;
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 600;
`;

export default PageNotFound;
