import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Nav from '../Nav/Nav';
import Home from '../../containers/Home';
import SignIn from '../Auth/SignIn/SignIn';
import SignOut from '../Auth/SignOut/SignOut';
import { Wrapper } from './AppStyles';

const App = () => (
  <MuiThemeProvider>
    <Router>
      <Wrapper>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signout" component={SignOut} />
      </Wrapper>
    </Router>
  </MuiThemeProvider>
);

export default App;
