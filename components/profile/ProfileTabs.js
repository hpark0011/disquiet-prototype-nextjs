import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { ProfileTabIndexContext } from '../../store/profile-tab-index-context';

const ProfileTabs = () => {
  const router = useRouter();
  const { tabs, tabIndex, setTabIndex } = useContext(ProfileTabIndexContext);

  const onTabItemClick = (id) => {
    setTabIndex(id);
  };

  return (
    <TabsContainer>
      <TabsWrapper>
        {tabs.map((tab) => {
          const { id, label, query } = tab;
          return (
            <Link
              key={id}
              href={
                query === 'posts'
                  ? `/profile/${query}/makerlogs`
                  : `/profile/${query}`
              }
            >
              <TabItem
                onClick={() => onTabItemClick(id)}
                active={router.pathname.includes(query)}
              >
                {label}
              </TabItem>
            </Link>
          );
        })}
        <ActiveTabIndicator tabIndex={tabIndex} />
      </TabsWrapper>
      <Divider />
    </TabsContainer>
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
  margin-top: 24px;
  width: 100%;
  justify-content: space-between;
  }
`;

const TabItem = styled.a`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding: 0.875rem 0;
  cursor: pointer;
  font-size: 14px;
  width: 25%;
  position: relative;
  z-index: 1;
  color: ${({ active }) => (active ? '#6d55ff' : '#c4c4c4')};

  &:hover {
    color: #6d55ff;
  }
`;

const Divider = styled.div`
  margin-top: -1px;
  position: relative;
  height: 1px;
  background-color: #f5f5f7;
  z-index: 0;
`;

const ActiveTabIndicator = styled.div`
  position: absolute;
  height: 2px;
  width: 25%;
  background-color: #6d55ff;
  bottom: 0;
  z-index: 4;
  left: ${({ tabIndex }) => `${tabIndex * 25}%`};
  transition: all 0.2s ease-in-out;
`;

export default ProfileTabs;
