import axios from 'axios';
import { createAction } from 'redux-actions';

import {
  addFavoriteEndpoint,
  getDeleteFavoriteEndpoint
} from '../utils/endpoints';

export const addFavorite = async (data) => {
  const {
    movie_id,
    user_id,
    title,
    overview,
    poster_path,
    release_date,
    vote_average
  } = data;
  const response = await axios.post(addFavoriteEndpoint, {
    movie_id,
    user_id,
    title,
    overview,
    poster_path,
    release_date,
    vote_average
  });
};

export const deleteFavorite = (data) => {
  const deleteFavoriteEndpoint = getDeleteFavoriteEndpoint(data);
  const { user_id, movie_id } = data;
  return (dispatch) => {
    axios
      .post(deleteFavoriteEndpoint, { user_id, movie_id })
      .then((response) => {
        dispatch({ type: 'DELETE_FAVORITE', payload: data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
