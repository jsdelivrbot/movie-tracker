import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import recentMoviesReducer from './recentMovies';
import authReducer from './auth';
import favoritesReducer from './favorites';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  recentMovies: recentMoviesReducer,
  favorites: favoritesReducer
});

export default rootReducer;
