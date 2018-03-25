import { handleActions } from 'redux-actions';
import omit from 'lodash/omit';

const initialState = {};

export default handleActions(
  {
    ADD_FAVORITE: (state, action) => {
      const movieData = action.payload;
      const { movie_id, title } = movieData;

      return {
        ...state,
        [movie_id]: {
          title
        }
      };
    },
    DELETE_FAVORITE: (state, action) => {
      const { movie_id } = action.payload;
      const newState = omit(state, [movie_id]);
      return { ...newState };
    },
    RESET_FAVORITES: (state, action) => ({
      initialState
    })
  },
  initialState
);

export const getFavorites = (state) => {
  const { user_id } = state.auth;
  return state.favorites[user_id];
};
