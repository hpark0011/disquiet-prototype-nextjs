import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import MakerlogContent from '../../../components/post/MakerlogContent';

const MagazineDetailPage = ({ makerlogs }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading className='loading'>Loading...</Loading>;
  }

  return (
    <Container>
      <MakerlogContent title={makerlogs.title} content={makerlogs.content} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  margin: auto;
  margin-top: 72px;
`;

export const getStaticPaths = async () => {
  const response = await fetch(`http://localhost:4000/makerlogs`);
  const data = await response.json();

  const paths = data.map((makerlog) => {
    return {
      params: {
        id: `${makerlog.id}`,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/makerlogs/${params.id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      makerlogs: data,
    },
  };
};

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export default MagazineDetailPage;
