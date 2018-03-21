import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { StyledCard, FieldWrapper, errorStyle } from '../Form/FormStyles';
import { signUpForm } from './SignUpStyles';
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
        <ThemeProvider theme={signUpForm}>
          <StyledCard>
            <span>Sign up for MovieTracker</span>
            <FieldWrapper>
              <Field
                autoFocus={true}
                name="name"
                component={TextField}
                fullWidth={true}
                hintText="Name"
                errorStyle={errorStyle}
              />
            </FieldWrapper>
            <FieldWrapper>
              <Field
                name="email"
                component={TextField}
                fullWidth={true}
                hintText="Email"
                errorStyle={errorStyle}
                errorText={errorMsg}
              />
            </FieldWrapper>
            <FieldWrapper>
              <Field
                name="password"
                type="password"
                component={TextField}
                fullWidth={true}
                hintText="Password"
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
                errorStyle={errorStyle}
              />
            </FieldWrapper>
            <FieldWrapper>
              <RaisedButton type="submit" label="Submit" />
            </FieldWrapper>
          </StyledCard>
        </ThemeProvider>
      </form>
    );
  }
}

const validate = (...props) => {
  const errors = getSignUpErrorMsgs(...props);
  return errors;
};

const mapStateToProps = (state) => ({
  errorMsg: getErrorMsg(state)
});

export default reduxForm({
  form: 'signup',
  fields: ['name', 'email', 'password', 'passwordConfirm'],
  validate
})(connect(mapStateToProps, { signUpUser })(SignUp));
