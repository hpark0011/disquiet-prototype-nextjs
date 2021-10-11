import styled from 'styled-components';
import ProfileDetailInfo from '../../components/profile/ProfileDetailInfo';
import ProfileTabs from '../../components/profile/ProfileTabs';
import MainLayout, { getStaticProps } from '../../components/layout/MainLayout';

export { getStaticProps };

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

export default ProfilePosts;
