const initialState = {
  user: {
    username: 'jimmy',
    email: 'email@email',
    password: 'password',
  },
  users: [],
};

const reducer = (prevState, action) => {
  const newUser = { ...prevState.user };
  const newUsers = [...prevState.users];
  switch (action.type) {
    case 'ON_USERNAME_CHANGE':
      return {
        ...prevState,
        user: { ...newUser, username: action.payload },
      };
    case 'ON_EMAIL_CHANGE':
      return {
        ...prevState,
        user: { ...newUser, email: action.payload },
      };
    case 'ON_PASSWORD_CHANGE':
      return {
        ...prevState,
        user: { ...newUser, password: action.payload },
      };
    case 'ON_SUBMIT':
      return {
        ...prevState,
        users: [...newUsers, action.payload],
      };
    default:
      throw new Error();
  }
};

export { initialState, reducer };
