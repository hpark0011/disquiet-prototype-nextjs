import styled from 'styled-components';
import Feeds from '../components/home/Feeds';
import FeedEntry from '../components/home/FeedEntry';
import MainLayout from '../components/layout/MainLayout';
import { GraphQLClient } from 'graphql-request';
import { GET_TRENDING_PRODUCTS } from '../graphql/posts';
import PostDetailModal from '../components/modal/PostDetailModal';
import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import { FeedTabContext } from '../store/feed-tab-context';

const HomePage = ({ trendingProducts, makerlogs }) => {
  const router = useRouter();
  const { setTabIndex } = useContext(FeedTabContext);

  useEffect(() => {
    router.pathname === '/' &&
      Object.keys(router.query).length === 0 &&
      router.push('/?topic=all&feedType=all&sort=popular') &&
      setTabIndex(0);
  }, [router.query]);

  return (
    <PageContainer>
      <MainLayout trendingProducts={trendingProducts}>
        <FeedEntry />
        <Feeds makerlogs={makerlogs} />
      </MainLayout>
      <PostDetailModal
        isModalOpen={!!router.query.makerlogId}
        makerlogId={router.query.makerlogId}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  margin-top: 80px;
`;

export default HomePage;

export const getStaticProps = async () => {
  // fetch trending products data
  const url = process.env.ENDPOINT;
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: process.env.GRAPH_CMS_TOKEN,
    },
  });

  const trendingProductsData = await graphQLClient.request(
    GET_TRENDING_PRODUCTS
  );
  const trendingProducts = trendingProductsData.trendingProducts.sort(
    (a, b) => {
      return a.rank - b.rank;
    }
  );

  // fetch makerlogs data
  const response = await fetch('http://localhost:4000/makerlogs');
  const makerlogs = await response.json();

  return {
    props: {
      trendingProducts,
      makerlogs,
    },
  };
};
