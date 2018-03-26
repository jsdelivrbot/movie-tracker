import axios from 'axios';
import { createAction } from 'redux-actions';

import {
  addFavoriteEndpoint,
  getDeleteFavoriteEndpoint,
  getAllFavoritesEndpoint
} from '../utils/endpoints';
import { getUserId } from '../reducers/auth';

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
  return (dispatch) => {
    axios
      .delete(deleteFavoriteEndpoint, { user_id, movie_id })
      .then((response) => {
        dispatch({ type: 'DELETE_FAVORITE', payload: { user_id, movie_id } });
      });
  };
};

export const getAllFavorites = async (user_id) => {
  const allFavoritesEndpoint = getAllFavoritesEndpoint(user_id);
  return (dispatch) => {
    axios
      .get(allFavoritesEndpoint, { user_id })
      .then((response) => {
        dispatch({ type: 'GET_FAVORITES', payload: { ...response.data.data } });
      })
      .catch((error) => {
        dispatch({ type: 'RESET_FAVORITES', payload: null });
      });
  };
};

export const resetFavorites = createAction('RESET_FAVORITES');

export const getFavorites = (state) => state.favorites;
