import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import recentMoviesReducer from './recentMovies';

const rootReducer = combineReducers({
  form: formReducer,
  recentMovies: recentMoviesReducer
});

export default rootReducer;
