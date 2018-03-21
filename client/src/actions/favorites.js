import axios from 'axios';
import { createAction } from 'redux-actions';

import { addFavoriteEndpoint } from '../utils/endpoints';

export const addFavorite = ({ movieId }, callback) => {
  return (dispatch) => {
    axios
      .post(addFavoriteEndpoint, { email, password })
      .then((response) => {
        dispatch({ type: 'AUTH_USER' });
        callback();
      })
      .catch((error) => {
        const errorMsg = 'Email and/or password is invalid.';
        dispatch(authError(errorMsg));
      });
  };
};
