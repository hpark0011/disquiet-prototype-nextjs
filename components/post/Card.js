import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useModal from '../../hook/useModal';
import PostDetailModal from '../modal/PostDetailModal';

const Card = ({ id, ...other }) => {
  const router = useRouter();
  const [isModalOpen, onOpenModal, onCloseModal] = useModal();

  const makerlog = { ...other };
  const { title, content, date, username, tags, upvote } = makerlog;

  const onCardBodyClick = () => {
    onOpenModal();
    router.push({
      pathname: '/',
      asPath: '/[userId]/[postId]',
      query: {
        userId: username,
        postId: id,
      },
    });
  };

  return (
    <Container>
      <CardHeader username={username} />
      <CardBody
        title={title}
        tags={tags}
        upvote={upvote}
        onCardBodyClick={onCardBodyClick}
        content={content}
      />
      <PostDetailModal
        username={username}
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
        tags={tags}
        upvote={upvote}
        content={content}
        title={title}
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
