import { handleActions } from 'redux-actions';

const initialState = {
  isAuthenticated: false,
  errorMsg: ''
};

export default handleActions(
  {
    AUTH_USER: (state, action) => {
      const user_id = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        user_id
      };
    },
    UNAUTH_USER: (state, action) => ({
      ...state,
      isAuthenticated: false,
      user_id: null
    }),
    AUTH_ERROR: (state, action) => {
      const errorMsg = action.payload;
      return {
        ...state,
        errorMsg
      };
    },
    RESET_ERROR_MSG: (state, action) => ({
      ...state,
      errorMsg: ''
    })
  },
  initialState
);

export const getAuthStatus = (state) =>
  state.auth ? state.auth.isAuthenticated : undefined;

export const getErrorMsg = (state) => state.auth.errorMsg;

export const getUserId = (state) => state.auth.user_id;
