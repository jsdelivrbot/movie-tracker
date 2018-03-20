import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import recentMoviesReducer from './recentMovies';
import authReducer from './auth';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  recentMovies: recentMoviesReducer
});

export default rootReducer;
