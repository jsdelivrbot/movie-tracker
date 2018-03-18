import React, { Component } from 'react';

export default class AuthButton extends Component {
  renderStatus = () => this.props.isAuthenticated ? 'Sign Out' : 'Sign In';

  render() {
    return (
      <button data-test="auth-btn" onClick={this.props.toggleAuth}>
        {this.renderStatus()}
      </button>
    )
  }
}
