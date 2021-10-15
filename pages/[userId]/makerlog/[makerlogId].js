import styled from 'styled-components';
import PostDetailModal from '../../../components/modal/PostDetailModal';

const MakerlogDetailPage = ({ makerlogs }) => {
  return <Container>makerlog detail page</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/makerlogs/${params.makerlogId}`
  );
  const makerlogs = await response.json();

  if (!makerlogs) {
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
