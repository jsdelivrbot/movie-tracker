import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  class Auth extends Component {
    static contextTypes = {
      router: PropTypes.object
    };

    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.renderHome();
      }
    }

    componentWillUpdate({ isAuthenticated }) {
      if (!isAuthenticated) {
        this.renderHome();
      }
    }

    renderHome = () => {
      this.context.router.history.push('/');
    };

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated
  });

  return connect(mapStateToProps)(Auth);
};
