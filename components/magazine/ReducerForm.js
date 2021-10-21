import styled from 'styled-components';
import { useReducer, useState, useEffect } from 'react';

const initialState = [
  { username: 'jimmy', email: 'email@email', password: 'password' },
];

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'ON_USERNAME_CHANGE':
      return { ...prevState, username: action.value };
    case 'ON_EMAIL_CHANGE':
      return { ...prevState, email: action.value };
    case 'ON_PASSWORD_CHANGE':
      return { ...prevState, password: action.value };
    case 'ON_SUBMIT':
      return {};
    default:
      throw new Error();
  }
};

const ReducerForm = () => {
  const [user, dispatch] = useReducer(reducer, initialState);
  const [users, setUsers] = useState([]);

  // const [user, setUser] = useState({
  //   username,
  //   email,
  //   password,
  // });

  const onSubmitHandler = () => {
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    setUser(newUser);
    setUsers([...users, user]);
  };

  console.log('user:::', user);
  console.log('users::::', users);

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
                value: e.target.value,
                key: 'username',
              })
            }
            value={user.username}
          />
        </div>
        <div className='input'>
          <label className='label'>email</label>
          <input
            type='text'
            onChange={(e) =>
              dispatch({
                type: 'ON_EMAIL_CHANGE',
                value: e.target.value,
                key: 'email',
              })
            }
            value={user.email}
          />
        </div>
        <div className='input'>
          <label className='label'>password</label>
          <input
            type='text'
            onChange={(e) =>
              dispatch({
                type: 'ON_PASSWORD_CHANGE',
                value: e.target.value,
                key: 'password',
              })
            }
            value={user.password}
          />
        </div>
      </div>
      <button type='submit' onClick={() => dispatch({ type: 'ON_SUBMIT' })}>
        submit
      </button>
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
`;

export default ReducerForm;
