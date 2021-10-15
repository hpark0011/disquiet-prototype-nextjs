import styled from 'styled-components';
import PostDetailContent from '../../../components/modal/PostDetailContent';
import { useRouter } from 'next/router';

const MakerlogDetailPage = ({ makerlog }) => {
  if (!makerlog) {
    return 'makerlog loading...';
  }
  return (
    <Container>
      <PostDetailContent makerlogId={makerlog.id} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 48px;
  align-items: center;
  background-color: #f5f5f7;
`;

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/makerlogs/${params.makerlogId}`
  );
  const makerlog = await response.json();

  if (!makerlog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      makerlog,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:4000/makerlogs`);
  const makerlogs = await res.json();
  const paths = makerlogs.map((makerlog) => {
    return {
      params: {
        userId: makerlog.user.id.toString(),
        makerlogId: makerlog.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export default MakerlogDetailPage;
