import styled from 'styled-components';
import { Fragment } from 'react';
import MultiSelectDropDownMenu from './MultiSelectDropDownMenu';
import CircularAdd from '../../assets/icons/circular_add.svg';

const TopicsSelector = ({
  addTopic,
  showTopicSelector,
  setShowTopicSelector,
  topicsOptions,
  setMakerlogTopics,
}) => {
  return (
    <Fragment>
      <AddTopics onClick={addTopic} $isVisible={showTopicSelector}>
        <CircularAddIconWrapper>
          <CircularAddIcon />
        </CircularAddIconWrapper>
        <AddTopicsLabel>토픽 설정하기</AddTopicsLabel>
      </AddTopics>
      {showTopicSelector && (
        <TopicSelectorWrapper>
          <CloseTopic
            onClick={() => {
              setShowTopicSelector(false);
            }}
          >
            ✕
          </CloseTopic>
          <MultiSelectDropDownMenu
            last
            placeholder={'토픽 (최대 3개):'}
            optionList={topicsOptions}
            setSelection={setMakerlogTopics}
          />
        </TopicSelectorWrapper>
      )}
    </Fragment>
  );
};

const AddTopics = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f5f5f7;
  padding: 12px 0px;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fafafc;
  }
`;

const AddTopicsLabel = styled.div`
  font-size: 14px;
  line-height: 15px;
  font-weight: 400;
  color: #8e8e8e;
  margin-left: 6px;
  transition: all 0.2s ease-in-out;

  ${AddTopics}:hover & {
    color: #6d55ff;
  }
`;

const CircularAddIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  border: 1px solid #c4c4c4;
  transition: all 0.2s ease-in-out;
  width: 17px;
  height: 17px;

  ${AddTopics}:hover & {
    border: 1px solid #6d55ff;
  }
`;

const CircularAddIcon = styled(CircularAdd)`
  fill: #c4c4c4;
  transition: all 0.2s ease-in-out;

  ${AddTopics}:hover & {
    fill: #6d55ff;
  }
`;

const CloseTopic = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c4c4c4;
  cursor: pointer;
  margin-left: 8px;
  font-size: 12px;
  border-bottom: 1px solid #f5f5f7;
  height: 100%;
  padding: 13px 0px;
  &:hover {
    color: #6d55ff;
  }
`;

const TopicSelectorWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
`;

export default TopicsSelector;
