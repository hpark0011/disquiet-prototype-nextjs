import styled from 'styled-components';
import { useRef } from 'react';

const MagazinePage = () => {
  const emailRef = useRef();
  const feedbackRef = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    console.log('event', e);
    console.log('email:::', enteredEmail);
    console.log('feedback:::', enteredFeedback);
  };

  return (
    <MagazinePageContainer>
      <h1>Signup</h1>
      <SignupFormContainer
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <div className='input-wrapper'>
          <label htmlFor='email`'>Your Email Address</label>
          <input type='email' id='email' ref={emailRef} />
        </div>
        <div className='input-wrapper'>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea type='text' id='feedback' rows='5' ref={feedbackRef} />
        </div>
        <button className='submit-btn'>Submit Feedback</button>
      </SignupFormContainer>
    </MagazinePageContainer>
  );
};

const MagazinePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 80px auto;
  justify-content: center;
`;

const SignupFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  .submit-btn {
    outline: none;
    padding: 8px 12px;
    background-color: #f5f5f7;
    border-radius: 8px;
    font-size: 16px;
    line-height: 1em;
    margin-top: 32px;
    border: 1px solid #000;
    cursor: pointer;

    &:hover {
      background-color: #e5e5e7;
    }
  }
`;

export default MagazinePage;
