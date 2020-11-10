import { authActionTypes } from '@Actions/authActions';
const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case authActionTypes.SET_LOGGED_IN_USER:
      const { data: userInfo } = action;
      return {
        ...state,
        userInfo,
        isAuthenticated: true,
      };
    case authActionTypes.LOGOUT_USER:
      return {
        ...state,
        userInfo: undefined,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
export default AuthReducer;
