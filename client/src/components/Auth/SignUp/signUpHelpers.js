export const getSignUpErrorMsgs = ({
  name,
  email,
  password,
  passwordConfirm
}) => {
  const signUpErrorMsgs = {
    name: getNameErrorMsg(name),
    email: getEmailErrorMsg(email),
    password: getPasswordErrorMsg(password, passwordConfirm),
    passwordConfirm: getPasswordConfirmErrorMsg(passwordConfirm)
  };

  return signUpErrorMsgs;
};

const getNameErrorMsg = (name) =>
  !name ? 'Please enter your name' : undefined;

const getEmailErrorMsg = (email) =>
  !email ? 'Please enter your email' : undefined;

const getPasswordErrorMsg = (password, passwordConfirm) => {
  if (password !== passwordConfirm) return 'Passwords must match';
  return !password ? 'Please enter a password' : undefined;
};

const getPasswordConfirmErrorMsg = (passwordConfirm) =>
  !passwordConfirm ? 'Please enter a password confirmation' : undefined;
