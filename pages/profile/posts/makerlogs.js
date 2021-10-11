import styled from 'styled-components';
import ProfileDetailInfo from '../../../components/profile/ProfileDetailInfo';
import ProfileTabs from '../../../components/profile/ProfileTabs';
import MyPosts from '../../../components/profile/MyPosts';
import MainLayout, {
  getStaticProps,
} from '../../../components/layout/MainLayout';
import { useState, useEffect } from 'react';

export { getStaticProps };

const ProfilePosts = ({ topics, trendingProducts }) => {
  const [makerlogs, setMakerlogs] = useState(null);

  useEffect(() => {
    const getMakerlogs = async () => {
      const response = await fetch('http://localhost:4000/myMakerlogs');
      const data = await response.json();
      console.log('data:::', data);
      setMakerlogs(data);
    };

    getMakerlogs();
  }, []);

  return (
    <PageContainer>
      <MainLayout topics={topics} trendingProducts={trendingProducts}>
        <ProfileDetailInfo />
        <ProfileTabs />
        <MyPosts postType={'makerlogs'} data={makerlogs} />
      </MainLayout>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  margin-top: 80px;
`;

export default ProfilePosts;
