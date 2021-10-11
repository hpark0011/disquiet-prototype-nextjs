import styled from 'styled-components';
import Feeds from '../components/home/Feeds';
import FeedEntry from '../components/home/FeedEntry';
import { makerlogs } from '../data/data';
import MainLayout, { getStaticProps } from '../components/layout/MainLayout';

export { getStaticProps };

const HomePage = ({ topics, trendingProducts }) => {
  return (
    <PageContainer>
      <MainLayout topics={topics} trendingProducts={trendingProducts}>
        <FeedEntry />
        <Feeds topics={topics} makerlogs={makerlogs} />
      </MainLayout>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  margin-top: 80px;
`;

export default HomePage;
