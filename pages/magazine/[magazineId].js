import fs from 'fs/promises';
import path from 'path';
import styled from 'styled-components';
import Link from 'next/link';

const magazineDetail = ({ loadedMagazine }) => {
  if (!loadedMagazine) {
    return <Loading>...loading</Loading>;
  }

  return (
    <Container>
      <Link href='/magazine'>
        <div className='back'>go back</div>
      </Link>
      <div className='title'>{loadedMagazine.title}</div>
      <div className='description'>{loadedMagazine.description}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  align-items: center;

  .back {
    padding: 6px 12px;
    cursor: pointer;
    &:hover {
      color: #6d55ff;
      background-color: #f5f5f7;
    }
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  font-size: 80px;
`;

const getData = async () => {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
};

export const getStaticProps = async (context) => {
  const data = await getData();

  const { params } = context;
  const magazineId = params.magazineId;

  const magazine = data.products.find(
    (magazineData) => magazineData.id === magazineId
  );

  return {
    props: {
      loadedMagazine: magazine,
    },
    notFound: false,
  };
};

export const getStaticPaths = async () => {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const paths = ids.map((id) => {
    return {
      params: {
        magazineId: id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default magazineDetail;
