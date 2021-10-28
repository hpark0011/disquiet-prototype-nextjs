import styled from 'styled-components';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';

const PostTypeMenu = () => {
  return (
    <PostTypeMenuContainer>
      <div className='title-wrapper'>
        {postType === 'myMakerlogs' && '메이커로그'}
        {postType === 'myProducts' && '프로덕트'}
        <ArrowTriangleDownIcon />
      </div>
    </PostTypeMenuContainer>
  );
};

const PostTypeMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: ${({ $isColor }) => ($isColor ? '#6d55ff' : '#c4c4c4')};
`;

export default PostTypeMenu;
