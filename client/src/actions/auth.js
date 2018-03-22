import axios from 'axios';
import { createAction } from 'redux-actions';

import { signInUserEndpoint, signUpUserEndpoint } from '../utils/endpoints';

export const signInUser = ({ url, email, password }, callback) => {
  return (dispatch) => {
    axios
      .post(signInUserEndpoint, { email, password })
      .then((response) => {
        const { id } = response.data.data;
        dispatch({ type: 'AUTH_USER', payload: id });
        callback();
      })
      .catch((error) => {
        const errorMsg = 'Email and/or password is invalid.';
        dispatch(authError(errorMsg));
      });
  };
};

export const signUpUser = ({ name, email, password }, callback) => {
  return (dispatch) => {
    axios
      .post(signUpUserEndpoint, { name, email, password })
      .then((response) => {
        const { id } = response.data;
        dispatch({ type: 'AUTH_USER', payload: id });
        // localStorage.setItem('isAuthenticated', 'true')
        callback();
      })
      .catch((error) => {
        console.log(error);
        const errorMsg = 'Email has already been used.';
        dispatch(authError(errorMsg));
      });
  };
};

export const resetErrorMsg = createAction('RESET_ERROR_MSG');
export const authError = createAction('AUTH_ERROR');

export const signOutUser = () => {
  // localStorage.removeItem('token');
  return { type: 'UNAUTH_USER' };
};
