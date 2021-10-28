import styled from 'styled-components';
import { Fragment } from 'react';
import CircularAddLarge from '../../assets/icons/circular_add_large.svg';

const TitleInput = ({
  titleInputVisible,
  showTitleInput,
  makerlogTitle,
  setMakerlogTitle,
  setTitleInputVisible,
}) => {
  return (
    <Fragment>
      <AddTitleButtonWrapper
        $isVisible={titleInputVisible}
        onClick={showTitleInput}
      >
        <CircularAddLargeIconWrapper>
          <CircularAddLargeIcon />
        </CircularAddLargeIconWrapper>
        <AddTitleButtonLabel>제목 추가하기</AddTitleButtonLabel>
      </AddTitleButtonWrapper>
      {titleInputVisible && (
        <TitleInputWrapper>
          <TextInput
            type='text'
            value={makerlogTitle}
            onChange={(e) => {
              setMakerlogTitle(e.target.value);
            }}
          />{' '}
          {makerlogTitle.length > 100 && (
            <div className='title-warning'>100자 이내로 적어주세요.</div>
          )}
          <div
            className='close-title-input'
            onClick={() => {
              setTitleInputVisible(false);
            }}
          >
            ✕ 제목 생략
          </div>
        </TitleInputWrapper>
      )}
    </Fragment>
  );
};

const AddTitleButtonWrapper = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? 'none' : 'flex')};
  align-items: center;
  margin-bottom: 6px;
  width: 100%;
  cursor: pointer;
`;

const AddTitleButtonLabel = styled.div`
  padding-top: 4px;
  font-size: 20px;
  margin-bottom: 2px;
  color: #c4c4c4;
  margin-left: 6px;
  font-weight: 400;
  transition: all 0.2s ease-in-out;

  ${AddTitleButtonWrapper}:hover & {
    color: #6d55ff;
  }
`;

const CircularAddLargeIcon = styled(CircularAddLarge)`
  fill: #c4c4c4;
  transition: all 0.2s ease-in-out;

  ${AddTitleButtonWrapper}:hover & {
    fill: #6d55ff;
  }
`;

const CircularAddLargeIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c4c4c4;
  transition: all 0.2s ease-in-out;
  border-radius: 32px;
  width: 24px;
  height: 24px;

  ${AddTitleButtonWrapper}:hover & {
    border: 1px solid #6d55ff;
  }
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

  .title-warning {
    color: red;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    white-space: nowrap;
    margin-left: 8px;
  }
`;

const TextInput = styled.input`
  width: 100%;
  outline: none;
  padding: 4px 2px;
  font-size: 20px;
  margin-bottom: 4px;
  border: none;
  font-weight: 500;
  font-family: 'Spoqa Han Sans Neo';
`;

export default TitleInput;
