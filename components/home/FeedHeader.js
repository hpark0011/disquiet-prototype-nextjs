import styled from 'styled-components';
import { useRouter } from 'next/Router';

const FeedHeader = ({ topics }) => {
  const router = useRouter();
  const currentTopic = router.query.topic;
  const currentTopicName = currentTopic
    ? topics.find((topic) => topic.queryString === currentTopic).topicName
    : '🌕 전체';

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
          <div className='tab'>전체</div>
          <div className='tab'>프로덕트</div>
          <div className='tab active'>메이커 일지</div>
          <div className='tab '>Q&A</div>
          <div className='tab '>팀원 찾기</div>
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
      background-color: #f0eeff;
      color: #6d55ff;
    }
  }

  .sort-item.selected {
    background-color: #f0eeff;
    color: #6d55ff;
  }

  .tabs-wrapper {
  }

  .tabs {
    display: flex;
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
    background-color: #f5f5f7;
  }
`;

export default FeedHeader;
