import styled from 'styled-components';
import ArrowUpwardIcon from '../../assets/icons/arrow_upward.svg';
import TextareaAutosize from 'react-textarea-autosize';

const CommentInput = () => {
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label className='label'>메이커와 소통해요~</label>
      <div className='comment-input-block-wrapper'>
        <div className='comment-input-wrapper'>
          <div className='profile-image' />
          <div className='comment-input'>
            <Textarea placeholder={'메이커와 소통해보세요.'} />
            <button className='button-circular'>
              <ArrowUpwardIcon />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  .label {
    display: flex;
    width: 100%;
    font-size: 16px;
    line-height: 1em;
    font-weight: 500;
    margin-bottom: 14px;
  }

  .comment-input-block-wrapper {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .profile-image {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 40px;
    height: 40px;
    background-color: #f5f5f7;
    border-radius: 40px;
    margin-right: 8px;
  }

  .comment-input-wrapper {
    display: flex;
    width: 100%;
  }

  .comment-input {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 4px 4px 4px 10px;
    border-radius: 2rem;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
    background-color: #f5f5f7;
    width: 100%;
    height: auto;
  }

  .button-circular {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #e5e5e8;
    padding: 4px;
    background-color: #fff;
    border-radius: 32px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      border: 1px solid #6d55ff;
      box-shadow: 0px 0px 0px 3px rgb(109 85 255 / 40%);
    }
  }
`;

const Textarea = styled(TextareaAutosize)`
  display: flex;
  width: 100%;
  background-color: transparent;
  font-size: 1rem;
  line-height: 1.5em;
  resize: none;
  border: none;
  outline: none;
  font-family: 'Helvetica Neue';

  &::placeholder {
    font-size: 14px;
    color: #8e8e8e;
    font-weight: 400;
  }
`;

export default CommentInput;
