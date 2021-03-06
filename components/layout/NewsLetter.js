import styled from 'styled-components';
import ArrowUpwardIcon from '../../assets/icons/arrow_upward.svg';

const NewsLetter = () => {
  return (
    <Container>
      <div className='label'>π λμ€μ½°μ΄μ λ΄μ€λ ν°</div>
      <div className='border-box'>
        <div className='text'>
          μλ‘μ΄ νλ‘λνΈ νΈλ λ λ° λ€λ₯Έ λ©μ΄μ»€λ€μ κ²½νλ΄μ λ΄μ€λ ν°λ‘
          λ°μλ³΄μΈμ. π
        </div>
        <div className='email-input-wrapper'>
          <input
            className='email-input'
            type='text'
            placeholder='μ΄λ©μΌ μ£Όμ'
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
    background-color: #fff;
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
    background-color: #f5f5f7;
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
