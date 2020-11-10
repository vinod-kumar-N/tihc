import React, { useState, Fragment } from 'react';
import FormInput from '@Uilib/form/formInput';
import { useDispatch, useSelector } from 'react-redux';
import AuthActions from '@Actions/authActions';
import './style.scss';
import { Redirect } from 'react-router-dom';

const SignInForm = () => {
  const [userState, setState] = useState({
    username: '',
    password: '',
    count: 0,
    isInputInvalid: false,
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((state) => ({
      ...state,
      [name]: value,
      count: state.count + 1,
    }));
  };
  const { username, password, isInputInvalid } = userState;
  const handleSubmit = () => {
    if (username.length > 2 && password.length > 3) {
      setState((state) => ({
        ...state,
        isInputInvalid: false,
      }));
      const payload = {
        username,
        password,
      };
      const { getAuthToken } = AuthActions;
      dispatch(getAuthToken(payload));
    } else {
      setState((state) => ({
        ...state,
        isInputInvalid: true,
      }));
      console.log('enter valid input');
    }
  };
  const alertHtml = isInputInvalid && (
    <span className="error-alert-box">Please enter valid input!</span>
  );
  if (isInputInvalid) {
    setTimeout(() => {
      setState((state) => ({
        ...state,
        isInputInvalid: false,
      }));
    }, 3000);
  }
  const isAuthenticated = useSelector(
    ({ AuthReducers }) => AuthReducers.isAuthenticated,
  );
  const toAccountPage = <Redirect to="/account-page" />;
  return isAuthenticated ? (
    toAccountPage
  ) : (
    <Fragment>
      {alertHtml}
      <FormInput
        type="text"
        label="Email/Mobile number"
        placeholder="Enter your email or mobile number"
        onChange={handleChange}
        value={username}
        name="username"
      />
      <FormInput
        type="password"
        label="Password"
        placeholder="Enter Password"
        onChange={handleChange}
        name="password"
      />
      <button onClick={handleSubmit}> Login </button>
    </Fragment>
  );
};

export default SignInForm;
