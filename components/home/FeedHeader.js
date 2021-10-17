import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { TopicsContext } from '../../store/topic-context';
import { FeedTabContext } from '../../store/feed-tab-context';
import Link from 'next/link';

const FeedHeader = () => {
  const { topics } = useContext(TopicsContext);
  const { tabs, tabIndex, setTabIndex } = useContext(FeedTabContext);
  const router = useRouter();
  const currentTopic = router.query.topic;
  const currentTopicName = currentTopic
    ? topics.find((topic) => topic.queryString === currentTopic).topicName
    : '🌕 전체';

  const onTabItemClick = (id) => {
    setTabIndex(id);
  };

  const tabWidth = tabs.find((tab) => tab.id === tabIndex).width;

  const newTabs = tabs.filter((tab) => tab.id <= tabIndex - 1);

  const leftPosition = newTabs.reduce((acc, tab) => {
    return acc + parseFloat(tab.width);
  }, 0);

  return (
    <Container>
      <div className='header'>
        <div className='current-topic'>{currentTopicName}</div>
        <div className='sort-wrapper'>
          <div className='sort-item selected'>인기</div>
          <div className='sort-item'>최신</div>
        </div>
      </div>
      <div className='tabs-wrapper'>
        <div className='tabs'>
          {tabs.map((tab) => {
            const { id, label, query } = tab;
            return (
              <Link
                key={id}
                href={{
                  pathname: '/',
                  query: {
                    topic: !currentTopic ? 'all' : currentTopic,
                    feedType: query,
                  },
                }}
              >
                <TabItem
                  onClick={() => onTabItemClick(id)}
                  active={router.query.feedType === query}
                >
                  {label}
                </TabItem>
              </Link>
            );
          })}
          <ActiveTabIndicator
            tabIndex={tabIndex}
            width={tabWidth}
            leftPosition={leftPosition}
          />
        </div>
        <div className='divider'></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  margin-bottom: 16px;
  width: 100%;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .current-topic {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 1em;
    color: #000;
  }
  .sort-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .sort-item {
    font-size: 12px;
    padding: 4px 6px;
    color: #8e8e8e;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 1rem;
    cursor: pointer;

    &:hover {
      background-color: #e2ddff;
      color: #6d55ff;
    }
  }

  .sort-item.selected {
    background-color: #e2ddff;
    color: #6d55ff;
  }

  .tabs-wrapper {
  }

  .tabs {
    display: flex;
    position: relative;
    width: 100%;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
    padding-bottom: 9px;
    font-size: 13px;
    line-height: 1em;
    color: #8e8e8e;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
  }

  .tab.active {
    color: #6d55ff;
    border-bottom: 2px solid #6d55ff;
  }

  .divider {
    height: 1px;
    margin-top: -1px;
    background-color: #e5e5e8;
  }
`;

const TabItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  padding-bottom: 9px;
  font-size: 13px;
  line-height: 1em;
  color: ${({ active }) => (active ? '#6d55ff' : '#8e8e8e')};
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  cursor: pointer;
`;

const ActiveTabIndicator = styled.div`
  position: absolute;
  height: 2px;
  width: ${({ width }) => width};
  background-color: #6d55ff;
  bottom: 0;
  z-index: 4;
  left: ${({ leftPosition, tabIndex }) =>
    `calc(${tabIndex} * 24px + ${leftPosition}px)`};
  transition: all 0.2s ease-in-out;
`;

export default FeedHeader;
