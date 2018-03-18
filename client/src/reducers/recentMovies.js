import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    UPDATE_RECENT_MOVIES: (state, action) => {
      const { results } = action.payload;
      return [...results];
    }
  },
  initialState
);

export const getRecentMovies = (state) => state.recentMovies;
