import React from 'react';
import PostDetailModal from '../../../components/modal/PostDetailModal';

const MakerlogDetailPage = ({ makerlogs }) => {
  console.log('makerlogs:::', makerlogs);
  return (
    <Container>
      <PostDetailModal
        user={user}
        // isModalOpen={isModalOpen}
        // setIsModalOpen={setIsModalOpen}
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
  margin-top: 80px;
`;

export const getStaticProps = async ({ context }) => {
  const { params } = context;
  console.log('params:::', params);
  const response = await fetch(
    `http://localhost:4000/makerlogs/${params.makerlogId}`
  );
  const makerlogs = response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      makerlogs,
    },
  };
};

export default MakerlogDetailPage;
