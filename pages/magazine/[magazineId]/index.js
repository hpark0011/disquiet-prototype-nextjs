import styled from 'styled-components';
import MagazineContent from '../../../components/magazine/MagazineContent';

const MagazineDetailPage = ({ magazineId }) => {
  console.log('magazineID:::', magazineId);
  return (
    <MagazineDetailPageContainer>
      <MagazineContent magazineId={magazineId} />
    </MagazineDetailPageContainer>
  );
};

const MagazineDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1120px;
  margin: auto;
  margin-top: 72px;
`;

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:4000/makerlogs/${params.magazineId}`
  );
  const makerlog = await res.json();

  return {
    props: { magazineId: makerlog.id },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:4000/makerlogs`);
  const makerlogs = await res.json();

  const paths = makerlogs.map((makerlog) => {
    return {
      params: {
        magazineId: makerlog.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export default MagazineDetailPage;
