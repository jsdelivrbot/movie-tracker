import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from '../Nav/Nav';
import Home from '../../containers/Home';
import { Wrapper } from './AppStyles';

const App = () => (
  <Wrapper>
    <Nav />
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  </Wrapper>
);

export default App;
