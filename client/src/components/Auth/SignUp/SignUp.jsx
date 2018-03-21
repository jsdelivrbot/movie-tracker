import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { StyledCard, FieldWrapper, errorStyle } from '../Form/FormStyles';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { getErrorMsg } from '../../../reducers/auth';
import { signUpUser } from '../../../actions/auth';
import { getSignUpErrorMsgs } from './signUpHelpers';

class SignUp extends Component {
  handleFormSubmit = (formProps) => {
    this.props.signUpUser(formProps, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const {
      handleSubmit,
      fields: { email, password, passwordConfirm },
      errorMsg
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <StyledCard>
          <span>Sign up for MovieTracker</span>
          <FieldWrapper>
            <Field
              autoFocus={true}
              name="name"
              component={TextField}
              fullWidth={true}
              hintText="Name"
              errorText={errorMsg}
              errorStyle={errorStyle}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="email"
              component={TextField}
              fullWidth={true}
              hintText="Email"
              errorText={errorMsg}
              errorStyle={errorStyle}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="password"
              type="password"
              component={TextField}
              fullWidth={true}
              hintText="Password"
              errorText={errorMsg}
              errorStyle={errorStyle}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="passwordConfirm"
              type="password"
              component={TextField}
              fullWidth={true}
              hintText="Confirm Password"
              errorText={errorMsg}
              errorStyle={errorStyle}
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

const validate = (...props) => {
  const errors = getSignUpErrorMsgs(...props);
  return errors;
};

const mapStateToProps = (state) => ({
  errorMsg: state.auth.errorMsg
});

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
})(connect(mapStateToProps, { signUpUser })(SignUp));
