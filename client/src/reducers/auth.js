import { handleActions } from 'redux-actions';

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
    }),
    AUTH_ERROR: (state, action) => {
      const errorMsg = action.payload;
      return {
        ...state,
        errorMsg
      };
    }
  },
  initialState
);

export const getAuthStatus = (state) =>
  state.auth ? state.auth.isAuthenticated : undefined;

export const getErrorMsg = (state) => state.auth.errorMsg;
