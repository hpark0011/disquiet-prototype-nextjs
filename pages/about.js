import styled from 'styled-components';
import Playground from '../components/Playground';

const About = () => {
  return (
    <Container>
      Playground
      <Playground />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 88px;
  align-items: center;
  justify-content: center;
`;

export default About;
