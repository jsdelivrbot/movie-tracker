import axios from 'axios';
import { createAction } from 'redux-actions';

import {
  addFavoriteEndpoint,
  getDeleteFavoriteEndpoint,
  getAllFavoritesEndpoint
} from '../utils/endpoints';

export const addFavorite = (data) => {
  const {
    movie_id,
    user_id,
    title,
    overview,
    poster_path,
    release_date,
    vote_average
  } = data;

  axios.post(addFavoriteEndpoint, {
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
  axios.delete(deleteFavoriteEndpoint, { user_id, movie_id });
};

export const getFavorites = async (props) => {
  const { user_id } = props;
  const allFavoritesEndpoint = getAllFavoritesEndpoint(props);
  const response = await axios(allFavoritesEndpoint, { user_id });
  const favorites = response.data.data;
  return favorites;
};
