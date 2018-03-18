import { createAction, handleActions } from 'redux-actions';

export const TOGGLE_AUTH = 'TOGGLE_AUTH';

export const toggleAuth = createAction(TOGGLE_AUTH);

export const initialState = false;

export default handleActions(
  {
    TOGGLE_AUTH: (state, action) => {
      const isAuthenticated = !state;
      return isAuthenticated;
    }
  },
  initialState
);
