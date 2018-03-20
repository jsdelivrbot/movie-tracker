import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';

export const signInUser = ({ email, password }, callback) => {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/api/users`, { email, password })
      .then((response) => {
        dispatch({ type: AUTH_USER });
        callback();
      })
      .catch((err) => {
        console.log(err);
        const errorMsg = 'Bad login info';
        // dispatch(authError(errorMsg))
      });
  };
};

export const signOutUser = () => {
  // localStorage.removeItem('token');
  return { type: UNAUTH_USER };
};
