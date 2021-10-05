import styled from 'styled-components';
import ArrowUpwardIcon from '../../assets/icons/arrow_upward.svg';

const NewsLetter = () => {
  return (
    <Container>
      <div className='label'>🗞 디스콰이엇 뉴스레터</div>
      <div className='border-box'>
        <div className='text'>
          새로운 프로덕트 트렌드 및 다른 메이커들의 경험담을 뉴스레터로
          받아보세요. 💌
        </div>
        <div className='email-input-wrapper'>
          <input
            className='email-input'
            type='text'
            placeholder='이메일 주소'
          />
          <button className='button-circular'>
            <ArrowUpwardIcon />
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  .label {
    font-size: 14px;
    font-weight: 500;
    color: #303030;
    margin-bottom: 14px;
  }

  .border-box {
    padding: 0.75rem;
    background-color: rgb(245, 245, 247);
    border-radius: 1rem;
  }

  .text {
    font-size: 13px;
    color: rgb(112, 112, 112);
    margin-bottom: 10px;
    word-break: keep-all;
    font-weight: 400;
  }

  .email-input-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(255, 255, 255);
    padding: 3px 3px 3px 10px;
    border-radius: 2rem;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;
  }

  .email-input {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    outline: none;
    font-size: 14px;
    ::placeholder {
      font-size: 13px;
      line-height: 1.6em;
      color: #8e8e8e;
    }
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

export default NewsLetter;
