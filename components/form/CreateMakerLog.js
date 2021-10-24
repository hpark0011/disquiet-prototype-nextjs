import styled, { ThemeConsumer } from 'styled-components';
import { useState, useContext, useReducer } from 'react';
import { useRouter } from 'next/router';
import { TopicsContext } from '../../store/topic-context';
import { MakerlogTagContext } from '../../store/makerlog-tag-context';
import { MakerlogContext } from '../../store/makerlog-context';
import Header from './Header';
import TitleInput from './TitleInput';
import MakerlogTextarea from '../common/MakerlogTextarea';
import MultiSelectDropDownMenu from './MultiSelectDropDownMenu';
import TopicsSelector from './TopicsSelector';
import CreateMakerlogFooter from './CreateMakerlogFooter';

const CreateMakerLog = ({ pageCount, setPageCount, onCloseModal }) => {
  const router = useRouter();
  const { topics } = useContext(TopicsContext);
  const { makerlogTagList } = useContext(MakerlogTagContext);
  const { makerlogs, setMakerlogs } = useContext(MakerlogContext);

  //converting topic obejct into MultiSelectDropDownMenu compatible object with value and label as keys.
  const topicsOptions = topics.map((topic) => {
    return { value: topic.queryString, label: topic.topicName };
  });

  const [startDate, setStartDate] = useState(new Date());
  const [makerlogTitle, setMakerlogTitle] = useState('');
  const [makerlogContent, setMakerlogContent] = useState('');
  const [makerlogTags, setMakerlogTags] = useState([]);
  const [makerlogTopics, setMakerlogTopics] = useState([]);
  const [shareSettings, setShareSettings] = useState({
    label: '전체공개',
    value: 'all',
  });
  const [commentSettings, setCommentSettings] = useState(true);
  const [showTopicSelector, setShowTopicSelector] = useState(false);
  const [titleInputVisible, setTitleInputVisible] = useState(false);

  const onBackwardArrowClick = () => {
    setPageCount(pageCount - 1);
    router.push('/', '/create-post');
  };

  const showTitleInput = () => {
    setTitleInputVisible(true);
  };

  const addTopic = () => {
    setShowTopicSelector(true);
  };

  const onMakerlogFormSubmit = () => {
    const newMakerlog = {
      id: new Date().getMilliseconds(),
      createdOn: new Date(),
      logDate: startDate,
      title: makerlogTitle,
      content: makerlogContent,
      tags: makerlogTags,
      topics: makerlogTopics,
      shareSettings: shareSettings,
      commentSettings: commentSettings,
    };
    const newMakerlogs = [...makerlogs, newMakerlog];
    setMakerlogs(newMakerlogs);
    setStartDate(new Date());
    setMakerlogTitle('');
    setMakerlogContent('');
    setMakerlogTags([]);
    setMakerlogTopics([]);
    setShareSettings({
      label: '전체공개',
      value: 'all',
    });
    setCommentSettings(true);
    setShowTopicSelector(false);
    setTitleInputVisible(false);
    onCloseModal();
  };

  return (
    <FormContainer>
      <Header
        onBackwardArrowClick={onBackwardArrowClick}
        startDate={startDate}
        setStartDate={setStartDate}
      />
      <TitleInput
        titleInputVisible={titleInputVisible}
        showTitleInput={showTitleInput}
        makerlogTitle={makerlogTitle}
        setMakerlogTitle={setMakerlogTitle}
        setTitleInputVisible={setTitleInputVisible}
      />
      <MakerlogTextarea
        makerlogContent={makerlogContent}
        setMakerlogContent={setMakerlogContent}
      />
      <MultiSelectDropDownMenu
        placeholder={'일지 태그:'}
        optionList={makerlogTagList}
        setSelection={setMakerlogTags}
      />
      <TopicsSelector
        addTopic={addTopic}
        showTopicSelector={showTopicSelector}
        topicsOptions={topicsOptions}
        setMakerlogTopics={setMakerlogTopics}
      />
      <CreateMakerlogFooter
        shareSettings={shareSettings}
        setShareSettings={setShareSettings}
        onMakerlogFormSubmit={onMakerlogFormSubmit}
        commentSettings={commentSettings}
        setCommentSettings={setCommentSettings}
      />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .modal-title-wrapper {
    display: flex;
    cursor: pointer;
    padding: 2px 2px 0px 8px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: #f5f5f7;
    }
  }
  .modal-title {
    font-size: 20px;
    font-weight: 500;
    margin: 0;
  }
`;

export default CreateMakerLog;
