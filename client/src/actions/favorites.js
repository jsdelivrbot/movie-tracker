import axios from 'axios';
import { createAction } from 'redux-actions';

import {
  addFavoriteEndpoint,
  getDeleteFavoriteEndpoint,
  getAllFavoritesEndpoint
} from '../utils/endpoints';

const ADD_FAVORITE = 'ADD_FAVORITE';

export const addFavorite = (data) => {
  return (dispatch) => {
    axios.post(addFavoriteEndpoint, { ...data }).then((response) => {
      dispatch({ type: 'ADD_FAVORITE', payload: { ...data } });
    });
  };
};

export const deleteFavorite = async (data) => {
  const deleteFavoriteEndpoint = getDeleteFavoriteEndpoint(data);
  const { user_id, movie_id } = data;
  await axios.delete(deleteFavoriteEndpoint, { user_id, movie_id });
};

// export const getFavorites = async (props) => {
//   const { user_id } = props;
//   const allFavoritesEndpoint = getAllFavoritesEndpoint(props);
//   const response = await axios(allFavoritesEndpoint, { user_id });
//   const favorites = response.data.data;
//   return favorites;
// };

export const getFavorites = (state) => state.favorites;
