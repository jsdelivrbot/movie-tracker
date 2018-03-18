import { combineReducers } from 'redux';

import authReducer from './auth.js';

const rootReducer = combineReducers({
  isAuthenticated: authReducer
});

export default rootReducer;
