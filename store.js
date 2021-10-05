import { useReducer, useContenxt } from 'react';

const initialState = {
  modalIsOpen: flase,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
      };
  }
};
