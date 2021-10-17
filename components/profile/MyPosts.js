import styled from 'styled-components';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';
import MyMakerlogs from './MyMakerlogs';
import MyProducts from './MyProducts';

const MyPosts = ({ postType, error, data, inView }) => {
  console.log('myposts porifle inveiw:::', inView);
  return (
    <PostsContainer>
      <MyPostsStickyContainer $inView={inView}>
        <div className='posts-header'>
          <div className='title-wrapper'>
            {postType === 'myMakerlogs' && '메이커로그'}
            {postType === 'myProducts' && '프로덕트'}
            <ArrowTriangleDownIcon />
          </div>
          <div className='button'>새 포스트</div>
        </div>
        <div className='filters'>
          <div className='filter'>
            2021년
            <ArrowTriangleDownIcon $isColor />
          </div>
          <div className='filter'>
            전체
            <ArrowTriangleDownIcon $isColor />
          </div>
        </div>
      </MyPostsStickyContainer>
      {postType === 'myMakerlogs' && <MyMakerlogs myMakerlogs={data} />}
      {postType === 'myProducts' && <MyProducts myProducts={data} />}
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;

  .my-posts-sticky-wrapper {
    position: sticky;
    padding-top: 32px;
    margin-bottom: 8px;
    top: 48px;
    z-index: 2;
    padding-bottom: 12px;
    background-color: rgba(245, 245, 247, 0.72);
    backdrop-filter: saturate(180%) blur(20px);
    transition: all 0.2s ease-in-out;
    border-bottom: ${({ $inView }) =>
      $inView ? '1px solid transparent' : '1px solid #ececee'};
  }

  .posts-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 1em;
    cursor: pointer;
  }

  .button {
    display: flex;
    align-items: center;
    padding: 6px 12px;
    border-radius: 32px;
    color: #6d55ff;
    font-weight: 500;
    background-color: #e2ddff;
    border: 1px solid #e2ddff;
    transition: all 0.2s ease-in-out;
    font-size: 13px;
    line-height: 1em;
    cursor: pointer;

    &:hover {
      border: 1px solid #6d55ff;
      box-shadow: rgb(109 85 255 / 40%) 0px 0px 0px 3px;
    }
  }

  .filters {
    margin-top: 8px;
    display: flex;
  }
  .filter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    line-height: 1em;
    padding: 1px 1px 1px 8px;
    color: #6d55ff;
    background-color: #e2ddff;
    border-radius: 32px;
    cursor: pointer;
    margin-right: 8px;
  }
`;

const MyPostsStickyContainer = styled.div`
  position: sticky;
  padding-top: 32px;
  margin-bottom: 8px;
  top: 48px;
  z-index: 2;
  padding-bottom: 16px;
  background-color: rgba(245, 245, 247, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  transition: all 0.2s ease-in-out;
  border-bottom: ${({ $inView }) =>
    $inView ? '1px solid transparent' : '1px solid #ececee'};
`;

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: ${({ $isColor }) => ($isColor ? '#6d55ff' : '#c4c4c4')};
`;

export default MyPosts;
