const ROOT_URL = 'http://localhost:3000';

export const signInUserEndpoint = `${ROOT_URL}/api/users`;
export const signUpUserEndpoint = `${ROOT_URL}/api/users/new`;
export const addFavoriteEndpoint = `${ROOT_URL}/users/favorites/new`;
export const getFavoritesBase = `${ROOT_URL}/users/:id/favorites`;
export const deleteFavoriteBase = `${ROOT_URL}/users/:id/favorites/:movie_id`;
