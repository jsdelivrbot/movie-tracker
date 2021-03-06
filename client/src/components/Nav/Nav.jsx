import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Wrapper, Title, NavItems, StyledLink } from './NavStyles';
import Home from '../Home/Home';
import SignIn from '../Auth/SignIn/SignIn';
import SignOut from '../Auth/SignOut/SignOut';
import SignUp from '../Auth/SignUp/SignUp';
import { getAuthStatus } from '../../reducers/auth';

class Nav extends Component {
  renderLinks = () =>
    this.props.isAuthenticated ? this.renderSignedIn() : this.renderSignedOut();

  renderSignedIn = () => (
    <StyledLink to="/signout" component={SignOut}>
      Sign Out
    </StyledLink>
  );

  renderSignedOut = () => [
    <StyledLink to="/signin" component={SignIn} key={1}>
      Sign In
    </StyledLink>,
    <StyledLink to="/signup" component={SignUp} key={2}>
      Sign Up
    </StyledLink>
  ];

  render() {
    return (
      <Wrapper>
        <Title to="/">MovieTracker</Title>
        <NavItems>
          <StyledLink to="/" component={Home}>
            Home
          </StyledLink>
          {this.renderLinks()}
        </NavItems>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state)
});

export default connect(mapStateToProps)(Nav);
