import styled from 'styled-components';

const ThreeColumnLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr 3fr;
  width: 100%;
  height: 100vh;
  margin: auto;
  max-width: 1120px;
  position: relative;
  z-index: 0;
  column-gap: 32px;
`;

export default ThreeColumnLayout;
