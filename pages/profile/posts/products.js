import styled from 'styled-components';
import ProfileDetailInfo from '../../components/profile/ProfileDetailInfo';
import ProfileTabs from '../../components/profile/ProfileTabs';
import MyPosts from '../../components/profile/MyPosts';
import MainLayout, { getStaticProps } from '../../components/layout/MainLayout';
import useSWR from 'swr';

export { getStaticProps };

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/myProducts');
  const data = await response.json();
  return data;
};

const ProfilePosts = ({ topics, trendingProducts }) => {
  const { data, error } = useSWR('myProducts', fetcher);

  return (
    <PageContainer>
      <MainLayout topics={topics} trendingProducts={trendingProducts}>
        <ProfileDetailInfo />
        <ProfileTabs />
        <MyPosts postType={data} error={error} />
      </MainLayout>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  margin-top: 80px;
`;

export default ProfilePosts;
