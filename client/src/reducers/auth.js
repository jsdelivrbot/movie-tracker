import { handleActions } from 'redux-actions';

import { AUTH_USER } from '../actions/auth';

const initialState = {
  isAuthenticated: false,
  errorMsg: ''
};

export default handleActions(
  {
    AUTH_USER: (state, action) => {
      return {
        ...state,
        isAuthenticated: true
      };
    }
  },
  initialState
);

export const getAuthStatus = (state) =>
  state.auth ? state.auth.isAuthenticated : undefined;
