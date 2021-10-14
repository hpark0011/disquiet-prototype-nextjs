import styled from 'styled-components';
import ProfileDetailInfo from '../../components/profile/ProfileDetailInfo';
import ProfileTabs from '../../components/profile/ProfileTabs';
import MainLayout from '../../components/layout/MainLayout';
import { GraphQLClient } from 'graphql-request';
import { GET_TRENDING_PRODUCTS } from '../../graphql/posts';

const ProfilePosts = ({ topics, trendingProducts }) => {
  return (
    <PageContainer>
      <MainLayout topics={topics} trendingProducts={trendingProducts}>
        <ProfileDetailInfo />
        <ProfileTabs />
        scrapbook
      </MainLayout>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  margin-top: 80px;
`;

export const getStaticProps = async () => {
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

  return {
    props: {
      trendingProducts,
    },
  };
};

export default ProfilePosts;
