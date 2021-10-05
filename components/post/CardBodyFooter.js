import styled from 'styled-components';
import CommentBubble from '../../assets/icons/comment_bubble.svg';
const CardBodyFooter = () => {
  return (
    <Container>
      <div className='topic-tags'>
        <div className='topic-tag'>👬 소셜</div>
        <div className='topic-tag'>🏫 교육</div>
      </div>
      <div className='comment-button'>
        <CommentBubbleIcon />
        32
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .topic-tags {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .topic-tag {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 1em;
    background-color: #e5e5e8;
    padding: 5px 8px;
    margin-right: 6px;
    border-radius: 1rem;
    color: #707070;
  }

  .comment-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 1em;
    background-color: #e5e5e8;
    padding: 2px 8px 2px 6px;
    margin-right: 6px;
    border-radius: 1rem;
    color: #707070;
  }
`;

const CommentBubbleIcon = styled(CommentBubble)`
  fill: #707070;
`;

export default CardBodyFooter;
