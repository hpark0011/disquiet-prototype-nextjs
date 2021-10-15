import styled from 'styled-components';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import { useRouter } from 'next/router';
import PostDetailModal from '../modal/PostDetailModal';
import { useState } from 'react';
import Link from 'next/link';

const Card = ({ id, ...other }) => {
  const router = useRouter();

  const makerlog = { ...other };
  const { title, content, date, user, tags, upvote, topics } = makerlog;

  return (
    <Container>
      <CardHeader user={user} date={date} />
      <Link
        href={`/?userId=${user.name}&makerlogId=${id}`}
        as={`/${user.name}/makerlog/${id}`}
        scroll={false}
        shallow
        passHref
      >
        <a>
          <CardBody
            title={title}
            tags={tags}
            upvote={upvote}
            content={content}
          />
        </a>
      </Link>
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
