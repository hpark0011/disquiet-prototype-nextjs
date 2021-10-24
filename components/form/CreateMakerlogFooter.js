import styled from 'styled-components';
import DropDownMenu from './DropDownMenu';
import ToggleButton from './ToggleButton';
import Globe from '../../assets/icons/globe.svg';

const CreateMakerlogFooter = ({
  shareSettings,
  setShareSettings,
  onMakerlogFormSubmit,
  commentSettings,
  setCommentSettings,
}) => {
  return (
    <CreateMakerlogFooterContainer>
      <div className='settings-wrapper'>
        <DropDownMenu
          icon={<GlobeIcon />}
          label={''}
          onChange={(v) => setShareSettings(v)}
          placeholder={'전체 공개'}
          value={shareSettings}
          options={[
            { label: '전체 공개', value: 'all' },
            { label: '나만 보기', value: 'private' },
          ]}
        />
        <Divider />
        <ToggleButton
          label={'댓글 허용'}
          toggleItem={commentSettings}
          setToggleItem={setCommentSettings}
        />
      </div>
      <SubmitButton onClick={onMakerlogFormSubmit}>기록하기</SubmitButton>
    </CreateMakerlogFooterContainer>
  );
};

const CreateMakerlogFooterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  justify-content: space-between;
  width: 100%;
  .settings-wrapper {
    display: flex;
    align-items: center;
  }
`;

const GlobeIcon = styled(Globe)`
  fill: #c4c4c4;
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

export default CreateMakerlogFooter;
