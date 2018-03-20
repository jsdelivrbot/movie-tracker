import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signOutUser } from '../../../actions/auth';
import { getAuthStatus } from '../../../reducers/auth';

class SignOut extends Component {
  componentWillMount() {
    this.props.signOutUser();
  }

  render() {
    return <div>Sorry to see you go...</div>;
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatus(state)
});

export default connect(mapStateToProps, { signOutUser })(SignOut);
