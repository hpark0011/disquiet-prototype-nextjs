import styled from 'styled-components';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';
import MyMakerlogs from './MyMakerlogs';
import MyProducts from './MyProducts';

const Posts = ({ postType, error, data }) => {
  return (
    <PostsContainer>
      <div className='posts-header'>
        <div className='title-wrapper'>
          메이커일지
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
      {!data && <div>loading...</div>}
      {postType === 'makerlogs' && <MyMakerlogs makerlogs={data} />}
      {postType === 'myProducts' && <MyProducts products={data} />}
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;

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
    margin: 0 8px 0 6px;
    padding: 6px 12px;
    border-radius: 32px;
    color: #6d55ff;
    font-weight: 500;
    background-color: #f0eeff;
    border: 1px solid #f0eeff;
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
    margin-top: 16px;
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
    background-color: #f0eeff;
    border-radius: 32px;
    cursor: pointer;
    margin-right: 8px;
  }
`;

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: ${({ $isColor }) => ($isColor ? '#6d55ff' : '#c4c4c4')};
`;

export default Posts;
