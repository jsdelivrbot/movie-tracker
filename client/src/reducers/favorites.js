import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions(
  {
    ADD_FAVORITE: (state, action) => {
      const movieData = action.payload;
      const { user_id, movie_id } = movieData;

      return {
        ...state,
        [user_id]: {
          [movie_id]: {
            ...movieData
          },
          ...state[user_id]
        }
      };
    }
  },
  initialState
);

export const getFavorites = (state) => {
  const { user_id } = state.auth;
  return state.favorites[user_id];
};
