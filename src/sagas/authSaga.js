import { all, takeLatest, put } from 'redux-saga/effects';
import UserActions, { authActionTypes } from '@Actions/authActions';
import AuthServices from '@Services/authServices';
import { withLoader } from './loaderSaga';

function* _getAuthToken(action) {
  try {
    const payload = action.data;
    const { username: email } = payload;
    yield put(UserActions.logoutUser());
    const tokenObj = yield AuthServices.getAuthTokan(payload);
    const tokenPayload = { email, tokenObj };
    yield put(UserActions.setAuthTokenToLocalStorage(tokenPayload));
    yield put(UserActions.loginUsingAuthToken());
  } catch (error) {
    yield console.log('Could not fetch token!', error);
  }
}

function* getAuthToken() {
  yield takeLatest(authActionTypes.GET_AUTH_TOKEN, withLoader(_getAuthToken));
}

function* _loginUsingToken() {
  const tokenCred = JSON.parse(localStorage.getItem('TOKEN_CRED'));
  try {
    const userObj = yield AuthServices.loginUsingToken(tokenCred);
    yield put(UserActions.setLoggedInUser(userObj));
  } catch (error) {
    console.log('could not login!', error);
  }
}

function* loginUsingToken() {
  yield takeLatest(
    authActionTypes.LOGIN_USING_AUTH_TOKEN,
    withLoader(_loginUsingToken),
  );
}

export default function* AuthSaga() {
  yield all([getAuthToken(), loginUsingToken()]);
}
