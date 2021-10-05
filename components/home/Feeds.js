import styled from 'styled-components';
import FeedHeader from './FeedHeader';
import Card from '../post/Card';

const Feeds = ({ topics, makerlogs }) => {
  return (
    <Container>
      <FeedHeader topics={topics} />
      {makerlogs.map((makerlog) => {
        const { id, ...other } = makerlog;
        return <Card key={id} id={id} {...other} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default Feeds;
