import styled from 'styled-components';
import Feeds from '../components/home/Feeds';
import FeedEntry from '../components/home/FeedEntry';
// import { makerlogs } from '../data/data';
import MainLayout, { getStaticProps } from '../components/layout/MainLayout';
import { useEffect, useState } from 'react';

export { getStaticProps };

const HomePage = ({ topics, trendingProducts }) => {
  const [makerlogs, setMakerlogs] = useState(null);

  useEffect(() => {
    const getMakerlogs = async () => {
      const response = await fetch('http://localhost:4000/makerlogs');
      const data = await response.json();
      setMakerlogs(data);
    };

    getMakerlogs();
  }, []);

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
