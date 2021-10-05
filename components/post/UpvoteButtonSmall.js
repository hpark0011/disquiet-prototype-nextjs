import styled from 'styled-components';
import UpvoteMini from '../../assets/icons/upvote_mini.svg';

const UpvoteButtonSmall = ({ upvote }) => {
  return (
    <Container>
      <UpvoteMiniIcon />
      <VoteCount>{upvote}</VoteCount>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px 4px 6px;
  border: 1px solid #e5e5e8;
  border-radius: 2rem;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: 1px solid #6d55ff;
    box-shadow: 0px 0px 0px 3px rgb(109 85 255 / 40%);
  }
`;

const VoteCount = styled.div`
  font-family: 'Helvetica Neue', Helvetica;
  font-size: 14px;
  line-height: 14px;
  color: #707070;

  ${Container}:hover & {
    color: #6d55ff;
  }
`;

const UpvoteMiniIcon = styled(UpvoteMini)`
  fill: #707070;

  ${Container}:hover & {
    fill: #6d55ff;
  }
`;

export default UpvoteButtonSmall;
