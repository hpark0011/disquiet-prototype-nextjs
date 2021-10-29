import styled from 'styled-components';
import ProfileDetailInfo from '../../../components/profile/ProfileDetailInfo';
import ProfileTabs from '../../../components/profile/ProfileTabs';
import MyPosts from '../../../components/profile/MyPosts';
import MainLayout from '../../../components/layout/MainLayout';
import { useState, useEffect } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GET_TRENDING_PRODUCTS } from '../../../graphql/posts';
import { useInView } from 'react-intersection-observer';

const ProfilePosts = ({ trendingProducts }) => {
  const [myProducts, setMyProducts] = useState(null);
  const { ref, inView } = useInView();

  useEffect(() => {
    const getMyProducts = async () => {
      const response = await fetch('http://localhost:4000/myProducts');

      console.log('response:::', response);
      const data = await response.json();
      setMyProducts(data);
    };

    getMyProducts();
  }, []);

  const tempMyProducts = [
    {
      id: 1,
      name: '디스콰이엇',
      url_slug: 'disquiet',
      is_approved: true,
      approved_at: new Date(),
    },
    {
      id: 2,
      name: '디스콰이엇',
      url_slug: 'disquiet',
      is_approved: true,
      approved_at: new Date(),
    },
    {
      id: 3,
      name: '디스콰이엇',
      url_slug: 'disquiet',
      is_approved: true,
      approved_at: new Date(),
    },
    {
      id: 4,
      name: '디스콰이엇',
      url_slug: 'disquiet',
      is_approved: true,
      approved_at: new Date(),
    },
    {
      id: 5,
      name: '디스콰이엇',
      url_slug: 'disquiet',
      is_approved: true,
      approved_at: new Date(),
    },
    {
      id: 6,
      name: '디스콰이엇',
      url_slug: 'disquiet',
      is_approved: true,
      approved_at: new Date(),
    },
  ];

  return (
    <PageContainer>
      <MainLayout trendingProducts={trendingProducts}>
        <ProfileDetailInfo />
        <ProfileTabs inViewRef={ref} />
        <MyPosts
          postType={'myProducts'}
          data={tempMyProducts}
          inView={inView}
        />
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
