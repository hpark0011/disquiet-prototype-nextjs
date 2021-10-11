import styled from 'styled-components';
import { GraphQLClient } from 'graphql-request';
import { GET_TOPICS } from '../../graphql/topics';
import { GET_TRENDING_PRODUCTS } from '../../graphql/posts';
import Categories from './Categories';
import NewsLetter from './NewsLetter';
import TrendingProducts from './TrendingProducts';
import Footer from './Footer';

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const topicsData = await graphQLClient.request(GET_TOPICS);
  const trendingProductsData = await graphQLClient.request(
    GET_TRENDING_PRODUCTS
  );

  const topics = topicsData.topics.sort((a, b) => {
    return a.displayOrder - b.displayOrder;
  });
  const trendingProducts = trendingProductsData.trendingProducts.sort(
    (a, b) => {
      return a.rank - b.rank;
    }
  );

  return {
    props: {
      topics,
      trendingProducts,
    },
  };
};

const MainLayout = ({ children, topics, trendingProducts }) => {
  return (
    <MainLayoutContainer>
      <div className='topics'>
        <Categories topics={topics} />
      </div>
      <div className='content'>{children}</div>
      <div className='bulletin-board'>
        <div className='sticky-wrapper'>
          <NewsLetter />
          <TrendingProducts trendingProducts={trendingProducts} />
          <Footer />
        </div>
      </div>
    </MainLayoutContainer>
  );
};

const MainLayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 7fr 3fr;
  width: 100%;
  height: 100vh;
  margin: auto;
  max-width: 1120px;
  position: relative;
  z-index: 0;
  column-gap: 32px;

  .topics {
    position: relative;
    min-width: 160px;
    max-width: 160px;
  }

  .content {
    padding-top: 4px;
    width: 100%;
  }

  .bulletin-board {
    position: relative;
  }

  .sticky-wrapper {
    position: fixed;
    max-width: 264px;
  }
`;

export default MainLayout;
