import styled from 'styled-components';
import CardBodyBody from '../post/CardBodyBody';
import CardBodyFooter from '../post/CardBodyFooter';
import useModal from '../../hook/useModal';
import PostDetailModal from '../modal/PostDetailModal';
import { useRouter } from 'next/router';

const MyCard = ({ id, title, content, user, tags, upvote }) => {
  const router = useRouter();
  const [isModalOpen, onOpenModal, onCloseModal] = useModal();

  const onMyCardBodyClick = () => {
    onOpenModal();
    router.push({
      pathname: '/profile/posts/makerlogs',
      asPath: '/[userId]/[postId]',
      query: {
        userId: user.name,
        postId: id,
      },
    });
  };

  return (
    <MyCardContainer onClick={onMyCardBodyClick}>
      <div className='title'>{title}</div>
      <CardBodyBody content={content} />
      <CardBodyFooter />
      <PostDetailModal
        user={user}
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
        tags={tags}
        upvote={upvote}
        content={content}
        title={title}
        currentPageRoute={router.pathname}
      />
    </MyCardContainer>
  );
};

const MyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  background-color: #f5f5f7;
  border-radius: 24px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fcfcfc;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.07);
  }

  .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    margin-top: 6px;
  }
`;

export default MyCard;
