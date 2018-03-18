import { combineReducers } from 'redux';

import recentMoviesReducer from './recentMovies';

const rootReducer = combineReducers({
  recentMovies: recentMoviesReducer
});

export default rootReducer;
