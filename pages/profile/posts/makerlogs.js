import styled from 'styled-components';
import ProfileDetailInfo from '../../../components/profile/ProfileDetailInfo';
import ProfileTabs from '../../../components/profile/ProfileTabs';
import MyPosts from '../../../components/profile/MyPosts';
import MainLayout from '../../../components/layout/MainLayout';
import { GraphQLClient } from 'graphql-request';
import { GET_TRENDING_PRODUCTS } from '../../../graphql/posts';
import PostDetailModal from '../../../components/modal/PostDetailModal';
import { useRouter } from 'next/router';

const ProfilePosts = ({ trendingProducts, myMakerlogs }) => {
  const router = useRouter();

  console.log('router path name:::', router.query);
  return (
    <PageContainer>
      <MainLayout trendingProducts={trendingProducts}>
        <ProfileDetailInfo />
        <ProfileTabs />
        <MyPosts postType={'myMakerlogs'} data={myMakerlogs} />
      </MainLayout>
      <PostDetailModal
        isModalOpen={!!router.query.makerlogId}
        currentPageRoute={router.pathname}
        makerlogId={router.query.makerlogId}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  margin-top: 80px;
`;

export const getServerSideProps = async () => {
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

  const res = await fetch('http://localhost:4000/myMakerlogs');
  const myMakerlogs = await res.json();

  return {
    props: {
      trendingProducts,
      myMakerlogs,
    },
  };
};

export default ProfilePosts;
