import axios from 'axios';
import { createAction } from 'redux-actions';

const ROOT_URL = 'http://localhost:3000';

export const signInUser = ({ url, email, password }, callback) => {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/api/users`, { email, password })
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

export const signUpUser = ({ name, email, password }, callback) => {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/api/users/new`, { name, email, password })
      .then((response) => {
        dispatch({ type: 'AUTH_USER' });
        // localStorage.setItem('isAuthenticated', 'true')
        callback();
      })
      .catch((error) => {
        const errorMsg = 'Email has already been used.';
        dispatch(authError(errorMsg));
      });
  };
};

export const authError = createAction('AUTH_ERROR');

export const signOutUser = () => {
  // localStorage.removeItem('token');
  return { type: 'UNAUTH_USER' };
};
