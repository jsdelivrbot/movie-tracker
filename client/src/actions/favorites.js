import axios from 'axios';
import { createAction } from 'redux-actions';

import {
  addFavoriteEndpoint,
  getDeleteFavoriteEndpoint,
  getAllFavoritesEndpoint
} from '../utils/endpoints';
import { getUserId } from '../reducers/auth';

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
  return (dispatch) => {
    axios
      .delete(deleteFavoriteEndpoint, { user_id, movie_id })
      .then((response) => {
        dispatch({ type: 'DELETE_FAVORITE', payload: { user_id, movie_id } });
      });
  };
};

export const getFavorites = (state) => state.favorites;
