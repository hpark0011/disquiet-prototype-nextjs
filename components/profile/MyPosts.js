import styled from 'styled-components';
import MyMakerlogs from './MyMakerlogs';
import MyProducts from './MyProducts';
import useModal from '../../hook/useModal';
import CreateNewPostModal from '../modal/CreateNewPostModal';
import MyPostsStickyHeader from './MypostsStickyHeader';

const MyPosts = ({ postType, error, data, inView }) => {
  const [isModalOpen, onOpenModal, onCloseModal] = useModal();

  return (
    <PostsContainer>
      <MyPostsStickyContainer $inView={inView}>
        <MyPostsStickyHeader onOpenModal={onOpenModal} />
      </MyPostsStickyContainer>
      {postType === 'myMakerlogs' && <MyMakerlogs myMakerlogs={data} />}
      {postType === 'myProducts' && <MyProducts myProducts={data} />}

      <CreateNewPostModal
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
      />
    </PostsContainer>
  );
};

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;

  .posts-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  padding-bottom: 14px;
  background-color: rgba(245, 245, 247, 0.72);
  backdrop-filter: saturate(180%) blur(20px);
  transition: all 0.2s ease-in-out;
  border-bottom: ${({ $inView }) =>
    $inView ? '1px solid transparent' : '1px solid #ececee'};
`;

export default MyPosts;
