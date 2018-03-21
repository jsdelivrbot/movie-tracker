import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { StyledCard, FieldWrapper, errorStyle } from '../Form/FormStyles';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui';
import { signInUser } from '../../../actions/auth';
import { getErrorMsg } from '../../../reducers/auth';

class SignIn extends Component {
  handleFormSubmit = (formProps) => {
    this.props.signInUser(formProps, () => {
      this.props.history.push('/');
    });
  };

  render() {
    const { handleSubmit, fields: { email, password }, errorMsg } = this.props;

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
            <RaisedButton type="submit" label="Submit" />
          </FieldWrapper>
        </StyledCard>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  errorMsg: getErrorMsg(state)
});

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(connect(mapStateToProps, { signInUser })(SignIn));
