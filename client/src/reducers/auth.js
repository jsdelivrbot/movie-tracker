import { handleActions } from 'redux-actions';

const initialState = {
  isAuthenticated: false,
  errorMsg: ''
};

export default handleActions(
  {
    AUTH_USER: (state, action) => {
      const userId = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        userId
      };
    },
    UNAUTH_USER: (state, action) => ({
      ...state,
      isAuthenticated: false,
      userId: null
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

export const getUserId = (state) => state.auth.userId;
