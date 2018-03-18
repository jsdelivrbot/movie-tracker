import React, { Component } from 'react';

import { Wrapper, Title, NavItems, NavItem } from './NavStyles';

export default class Nav extends Component {
  render() {
    return (
      <Wrapper>
        <Title>MovieTracker</Title>
        <NavItems>
          <NavItem>Home</NavItem>
          <NavItem>Sign In</NavItem>
          <NavItem>Sign Out</NavItem>
        </NavItems>
      </Wrapper>
    );
  }
}
