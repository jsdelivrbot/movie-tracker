import { handleActions } from 'redux-actions';

import { AUTH_USER } from '../actions/auth';

const initialState = {
  isAuthenticated: false,
  errorMsg: ''
};

export default handleActions(
  {
    AUTH_USER: (state, action) => ({
      ...state,
      isAuthenticated: true
    }),
    UNAUTH_USER: (state, action) => ({
      ...state,
      isAuthenticated: false
    })
  },
  initialState
);

export const getAuthStatus = (state) =>
  state.auth ? state.auth.isAuthenticated : undefined;
