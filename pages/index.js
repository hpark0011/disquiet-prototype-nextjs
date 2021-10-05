import styled from 'styled-components';
import { GraphQLClient } from 'graphql-request';
import { GET_TOPICS } from '../graphql/topics';
import { GET_TRENDING_PRODUCTS } from '../graphql/posts';
import ThreeColumnLayout from '../components/layout/ThreeColumnLayout';
import TrendingProducts from '../components/layout/TrendingProducts';
import NewsLetter from '../components/layout/NewsLetter';
import Footer from '../components/layout/Footer';
import Categories from '../components/layout/Categories';
import Feeds from '../components/home/Feeds';
import FeedEntry from '../components/home/FeedEntry';
import { makerlogs } from '../data';

export const getStaticProps = async () => {
  const url = process.env.ENDPOINT;

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const topicsData = await graphQLClient.request(GET_TOPICS);
  const topics = topicsData.topics;

  const trendingProductsData = await graphQLClient.request(
    GET_TRENDING_PRODUCTS
  );
  const trendingProducts = trendingProductsData.trendingProducts;

  return {
    props: {
      topics,
      trendingProducts,
    },
  };
};

const HomePage = ({ topics, trendingProducts }) => {
  topics.sort((a, b) => {
    return a.displayOrder - b.displayOrder;
  });

  trendingProducts.sort((a, b) => {
    return a.rank - b.rank;
  });

  return (
    <PageContainer>
      <ThreeColumnLayout>
        <div className='left-column'>
          <Categories topics={topics} />
        </div>
        <div className='center-column'>
          <FeedEntry />
          <Feeds topics={topics} makerlogs={makerlogs} />
        </div>
        <div className='right-column'>
          <div className='wrapper'>
            <NewsLetter />
            <TrendingProducts trendingProducts={trendingProducts} />
            <Footer />
          </div>
        </div>
      </ThreeColumnLayout>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  margin-top: 80px;

  .left-column {
    position: relative;
    min-width: 176px;
  }
  .center-column {
    padding-top: 4px;
  }
  .right-column {
    position: relative;
  }

  .wrapper {
    position: fixed;
    max-width: 264px;
  }
`;

export default HomePage;
