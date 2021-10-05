import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const tabs = [
  { id: 1, label: '포스트', query: 'posts' },
  { id: 2, label: '스토리', query: 'stories' },
  { id: 3, label: '스크랩북', query: 'scrapbook' },
  { id: 2, label: '투표한 포스트', query: 'upvoted' },
];

const ProfileTabs = () => {
  const router = useRouter();
  return (
    <>
      <TabsContainer>
        <TabsWrapper>
          {tabs.map((tab) => {
            const { id, label, query } = tab;
            return (
              <Link key={id} href={{ pathname: '/profile/posts' }}>
                <TabItem active={router.pathname === 'profile/posts'}>
                  포스트
                </TabItem>
              </Link>
            );
          })}
          <Link href={{ pathname: '/profile/posts' }}>
            <TabItem active={router.pathname === 'profile/posts'}>
              포스트
            </TabItem>
          </Link>
          <Link href={{ pathname: '/profile/story' }}>
            <TabItem active={router.pathname === 'profile/story'}>
              스토리
            </TabItem>
          </Link>
          <Link href={{ pathname: '/profile/scrapbook' }}>
            <TabItem active={router.pathname === 'profile/scrapbook'}>
              스크랩북
            </TabItem>
          </Link>
          <Link href={{ pathname: '/profile/upvoted' }}>
            <TabItem active={router.pathname === 'profile/upvoted'}>
              투표한 포스트
            </TabItem>
          </Link>
          <ActiveTabIndicator tabIndex={tabIndex} />
        </TabsWrapper>
      </TabsContainer>
      <Divider />
    </>
  );
};

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabsWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin-top: 2rem;
  width: 100%;
  justify-content: space-between;
`;

const activeClassName = 'tab-item-active';
const TabItem = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 0.875rem 0;
  color: #c4c4c4;
  transition: 0.2s all ease-in-out;

  &.${activeClassName} {
    color: #6d55ff;
  }
  &:hover {
    color: #6d55ff;
  }

  .tab-item-label {
    margin-left: 0.25rem;
    margin-right: 0.375rem;
    font-size: 14px;
    line-height: 1.1rem;
  }
`;

const ActiveTabIndicator = styled.div`
  width: 320px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  bottom: -2px;
  transition: 0.2s left ease-in-out;
  left: ${({ tabIndex }) => `${tabIndex * 50}%`};
  }
`;

const Divider = styled.div`
  margin-top: 1px;
  height: 1px;
  background-color: #f5f5f7;
`;

const baseTabIconStyles = css`
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  fill: ${({ theme, $active }) => ($active ? theme.colors.primary : '#e5e5ef')};
  transition: 0.25s fill ease-in-out;

  ${TabItem}:hover & {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export default ProfileTabs;
