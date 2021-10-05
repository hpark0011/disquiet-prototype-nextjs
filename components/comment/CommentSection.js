import styled from 'styled-components';
import CommentInput from './CommentInput';

const CommentSection = () => {
  return (
    <Container>
      <CommentInput />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default CommentSection;
