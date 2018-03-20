import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { StyledCard, FieldWrapper } from './SignInStyles';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { signInUser } from '../../../actions/auth';

class SignIn extends Component {
  handleFormSubmit = ({ email, password }) => {
    this.props.signInUser({ email, password }, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <StyledCard>
          <span>Sign in to MovieTracker</span>
          <FieldWrapper>
            <Field
              autoFocus={true}
              name="email"
              component={TextField}
              fullWidth={true}
              hintText="Email"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="password"
              type="password"
              component={TextField}
              fullWidth={true}
              hintText="Password"
            />
          </FieldWrapper>
          <FieldWrapper>
            <RaisedButton type="submit" label="Submit" />
          </FieldWrapper>
        </StyledCard>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(connect(null, { signInUser })(SignIn));
