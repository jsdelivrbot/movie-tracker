import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App.jsx';
import RequireAuth from './components/RequireAuth.jsx';
import Resources from './components/Resources.jsx';
import reducers from './redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App>
        <Route path="/resources" component={RequireAuth(Resources)} />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);
