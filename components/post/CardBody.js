import styled from 'styled-components';
import CardBodyHeader from './CardBodyHeader';
import CardBodyBody from './CardBodyBody';
import CardBodyFooter from './CardBodyFooter';

const CardBody = ({ content, upvote, title, tags, onCardBodyClick }) => {
  return (
    <Container>
      <CardBodyHeader upvote={upvote} tags={tags} title={title} />
      <CardBodyBody content={content} />
      <CardBodyFooter />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 24px;
  margin-left: 36px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #fcfcfc;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.07);
  }
`;

export default CardBody;
