const ROOT_URL = 'http://localhost:3000';

export const signInUserEndpoint = `${ROOT_URL}/api/users`;
export const signUpUserEndpoint = `${ROOT_URL}/api/users/new`;
export const addFavoriteEndpoint = `${ROOT_URL}/api/users/favorites/new`;

export const getDeleteFavoriteEndpoint = ({ user_id, movie_id }) =>
  `${ROOT_URL}/api/users/${user_id}/favorites/${movie_id}`;

export const getAllFavoritesEndpoint = ({ user_id }) =>
  `${ROOT_URL}/api/users/${user_id}/favorites`;
