import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import { useRouter } from 'next/router';
import PostDetailModal from '../modal/PostDetailModal';
import { useState } from 'react';
import Link from 'next/link';

const Card = ({ id, ...other }) => {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    router.push('/', `/${user.name}/${id}`, { shallow: true });
    setIsModalOpen(true);
  };

  const makerlog = { ...other };
  const { title, content, date, user, tags, upvote, topics } = makerlog;

  const onCardBodyClick = () => {
    openModal();
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
        setIsModalOpen={setIsModalOpen}
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
