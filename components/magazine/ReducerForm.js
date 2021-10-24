import styled from 'styled-components';
import { useReducer, useState, useEffect } from 'react';
import { initialState, reducer } from './Reducer';

const ReducerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReducerFormContainer>
      <div className='inputs'>
        <div className='input'>
          <label className='label'>username</label>
          <input
            type='text'
            onChange={(e) =>
              dispatch({
                type: 'ON_USERNAME_CHANGE',
                payload: e.target.value,
                key: 'username',
              })
            }
            value={state.user.username}
          />
        </div>
        <div className='input'>
          <label className='label'>email</label>
          <input
            type='text'
            onChange={(e) =>
              dispatch({
                type: 'ON_EMAIL_CHANGE',
                payload: e.target.value,
                key: 'email',
              })
            }
            value={state.user.email}
          />
        </div>
        <div className='input'>
          <label className='label'>password</label>
          <input
            type='text'
            onChange={(e) =>
              dispatch({
                type: 'ON_PASSWORD_CHANGE',
                payload: e.target.value,
                key: 'password',
              })
            }
            value={state.user.password}
          />
        </div>
      </div>
      <button
        type='submit'
        onClick={() =>
          dispatch({
            type: 'ON_SUBMIT',
            payload: {
              username: state.user.username,
              email: state.user.email,
              password: state.user.password,
              id: new Date(),
            },
          })
        }
      >
        submit
      </button>
      {state.users.length >= 0 &&
        state.users.map((user) => {
          const { username, email, password, id } = user;
          return (
            <div key={id} className='card-wrapper'>
              <div className='element'>username:{username}</div>
              <div className='element'>email: {email}</div>
              <div className='element'>password:{password}</div>
            </div>
          );
        })}
    </ReducerFormContainer>
  );
};

const ReducerFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .inputs {
    display: flex;
    margin-bottom: 16px;
  }

  .label {
    margin-right: 8px;
  }

  .input {
    margin: 8px;
  }

  button {
    padding: 8px 16px;
    font-size: 16px;
  }

  .card-wrapper {
    display: flex;
    padding: 12px;
    background-color: #fff;
    margin-bottom: 32px;
    border-radius: 24px;
  }

  .element {
    margin: 4px;
  }
`;

export default ReducerForm;
