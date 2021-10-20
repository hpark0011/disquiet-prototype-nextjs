import styled from 'styled-components';
import ArrowBackward from '../../assets/icons/arrow_backward.svg';
import MagazineFill from '../../assets/icons/magazine_fill.svg';
import Globe from '../../assets/icons/globe.svg';
import Calendar from '../../assets/icons/calendar.svg';
import MakerlogTextarea from '../common/MakerlogTextarea';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import ArrowTriangleDown from '../../assets/icons/arrow_triangle_down.svg';
import MultiSelectDropDownMenu from '../magazine/MultiSelectDropDownMenu';
import DropDownMenu from '../magazine/DropDownMenu';
import ToggleButton from '../magazine/ToggleButton';
import { useState, useContext } from 'react';
import CircularAdd from '../../assets/icons/circular_add.svg';
import CircularAddLarge from '../../assets/icons/circular_add_large.svg';
import DatePicker from '../calendar/DatePicker';
import { TopicsContext } from '../../store/topic-context';

const CreateMakerLog = ({ pageCount, setPageCount, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onBackwardArrowClick = () => {
    setPageCount(pageCount - 1);
    router.push('/', '/create-post');
  };

  const onSubmit = (data) => {
    reset();
  };

  const [shareSettings, setShareSettings] = useState('전체 공개');
  const [showTopicSelector, setShowTopicSelector] = useState(false);
  const [titleInput, setTitleInput] = useState(false);

  const showTitleInput = () => {
    setTitleInput(true);
  };

  const addTopic = () => {
    setShowTopicSelector(true);
  };

  const { topics } = useContext(TopicsContext);

  const topicsOptions = topics.map((topic) => {
    return { value: topic.queryString, label: topic.topicName };
  });

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div className='header'>
        <ArrowBackwardIcon onClick={onBackwardArrowClick} />
        <DatePicker />
      </div>
      <AddTitleButtonWrapper $isVisible={titleInput} onClick={showTitleInput}>
        <CircularAddLargeIcon />
        <div className='add-title-button-label'>제목 추가하기</div>
      </AddTitleButtonWrapper>
      {titleInput && (
        <TitleInputWrapper>
          <TitleInput />{' '}
          <div
            className='close-title-input'
            onClick={() => {
              setTitleInput(false);
            }}
          >
            ✕ 제목 생략
          </div>
        </TitleInputWrapper>
      )}
      <MakerlogTextarea register={register} />
      <MultiSelectDropDownMenu
        placeholder={'일지 태그:'}
        optionList={[
          { value: 'insight', label: '# 인사이트' },
          { value: 'idea', label: '# 아이디어' },
          { value: 'mvp', label: '# MVP' },
          { value: 'milestone', label: '# 마일스톤' },
          { value: 'findteammate', label: '# 팀원찾기' },
        ]}
      />
      <AddTopics onClick={addTopic} $isVisible={showTopicSelector}>
        <CircularAddIcon />
        <div className='add-topics-label'>토픽 설정하기</div>
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
            placeholder={'토픽:'}
            optionList={topicsOptions}
          />
        </TopicSelectorWrapper>
      )}
      <div className='footer'>
        <div className='settings-wrapper'>
          <DropDownMenu
            icon={<GlobeIcon />}
            label={''}
            onChange={(v) => setShareSettings(v)}
            placeholder={'전체 공개'}
            value={shareSettings}
            options={['전체 공개', '나만 보기']}
          />
          <Divider />
          <ToggleButton label={'댓글 허용'} />
        </div>
        <SubmitButton type='submit'>기록하기</SubmitButton>
      </div>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  .header {
    display: flex;
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: 1rem;
    margin-bottom: 12px;
  }
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
  .settings-wrapper {
    display: flex;
    align-items: center;
  }
  .footer {
    display: flex;
    align-items: center;
    margin-top: 16px;
    justify-content: space-between;
    width: 100%;
  }
`;

const ArrowBackwardIcon = styled(ArrowBackward)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0px;
  background-color: transparent;
  border-radius: 2rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f7;
  }
`;

const MagazineFillIcon = styled(MagazineFill)`
  fill: #6d55ff;
`;

const GlobeIcon = styled(Globe)`
  fill: #c4c4c4;
`;

const CalendarIcon = styled(Calendar)`
  fill: #fd88aa;
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #e5e5f8;
  margin: 0px 14px 0px 16px;
`;

const SubmitButton = styled.button`
  color: #fff;
  background-color: #6d55ff;
  border: none;
  font-size: 14px;
  line-height: 1em;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    opacity: 0.7;
  }
`;

const ArrowTriangleDownIcon = styled(ArrowTriangleDown)`
  fill: #c4c4c4;
`;

const CircularAddIcon = styled(CircularAdd)``;

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

  .add-topics-label {
    font-size: 13px;
    font-weight: 400;
    color: #c4c4c4;
    margin-left: 4px;

    &:hover {
      color: #6d55ff;
    }
  }
`;

const AddTitleButtonWrapper = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? 'none' : 'flex')};
  align-items: center;
  margin-bottom: 6px;
  width: 100%;
  cursor: pointer;

  .add-title-button-label {
    padding-top: 4px;
    font-size: 20px;
    margin-bottom: 2px;
    color: #c4c4c4;
    margin-left: 6px;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: #6d55ff;
    }
  }
`;

const CircularAddLargeIcon = styled(CircularAddLarge)``;

const TitleInput = styled.input`
  width: 100%;
  outline: none;
  padding: 4px 2px;
  font-size: 20px;
  margin-bottom: 4px;
  border: none;
  font-weight: 500;
  font-family: 'Spoqa Han Sans Neo';
`;

const TitleInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .close-title-input {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #2f80ed;
    white-space: nowrap;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
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

export default CreateMakerLog;
