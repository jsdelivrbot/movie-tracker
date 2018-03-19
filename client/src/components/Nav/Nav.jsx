import React, { Component } from 'react';

import { Wrapper, Title, NavItems, StyledLink } from './NavStyles';
import Home from '../Home/Home';
import SignIn from '../Auth/SignIn/SignIn';
import SignOut from '../Auth/SignOut/SignOut';

export default class Nav extends Component {
  render() {
    return (
      <Wrapper>
        <Title>MovieTracker</Title>
        <NavItems>
          <StyledLink to="/" component={Home}>
            Home
          </StyledLink>
          <StyledLink to="/signin" component={SignIn}>
            SignIn
          </StyledLink>
          <StyledLink to="/signout" component={SignOut}>
            Sign Out
          </StyledLink>
        </NavItems>
      </Wrapper>
    );
  }
}
