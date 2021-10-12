import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import { useRouter } from 'next/router';
import useModal from '../../hook/useModal';
import PostDetailModal from '../modal/PostDetailModal';

const Card = ({ id, ...other }) => {
  const router = useRouter();
  const [isModalOpen, onOpenModal, onCloseModal] = useModal();

  const makerlog = { ...other };
  const { title, content, date, user, tags, upvote, topics } = makerlog;

  const onCardBodyClick = () => {
    onOpenModal();
    router.push({
      pathname: '/',
      asPath: '/[userId]/[postId]',
      query: {
        userId: user.name,
        postId: id,
      },
    });
  };

  return (
    <Container>
      <CardHeader user={user} date={date} />
      <CardBody
        title={title}
        tags={tags}
        upvote={upvote}
        onCardBodyClick={onCardBodyClick}
        content={content}
      />
      <PostDetailModal
        user={user}
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
        tags={tags}
        upvote={upvote}
        content={content}
        title={title}
        date={date}
        currentPageRoute={router.pathname}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  transition: all 0.2s ease-in-out;
`;

export default Card;
