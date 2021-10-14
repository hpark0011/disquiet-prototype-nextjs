import styled from 'styled-components';
import ProfileDetailInfo from '../../../components/profile/ProfileDetailInfo';
import ProfileTabs from '../../../components/profile/ProfileTabs';
import MyPosts from '../../../components/profile/MyPosts';
import MainLayout from '../../../components/layout/MainLayout';
import { useState, useEffect } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GET_TRENDING_PRODUCTS } from '../../../graphql/posts';

const ProfilePosts = ({ trendingProducts }) => {
  const [myMakerlogs, setMyMakerlogs] = useState(null);

  useEffect(() => {
    const getMyMakerlogs = async () => {
      const response = await fetch('http://localhost:4000/myMakerlogs');
      const data = await response.json();
      setMyMakerlogs(data);
    };

    getMyMakerlogs();
  }, []);

  return (
    <PageContainer>
      <MainLayout trendingProducts={trendingProducts}>
        <ProfileDetailInfo />
        <ProfileTabs />
        <MyPosts postType={'myMakerlogs'} data={myMakerlogs} />
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
