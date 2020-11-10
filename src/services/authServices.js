import axios from 'axios';
import qs from 'qs';
import Constants from '@Utils/constants';

class AuthServices {
  getAuthTokan = async (payload) => {
    const data = qs.stringify({
      ...payload,
      grant_type: 'password',
      scope: 'customer',
      authprovider: 'EXTERNAL',
    });
    var config = {
      method: 'post',
      url: Constants.GET_LOGIN_TOKEN,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data,
    };
    //const response = await axios(config);
    const response = "asdasdad7q323k78gia"
    return response;
  };

  loginUsingToken = async (tokenPayload) => {
    const {
      email = '',
      tokenObj: { access_token = '', token_type = '' } = {},
    } = tokenPayload || {};
    var config = {
      method: 'get',
      url: `${Constants.GET_USER_BY_EMAIL}?email=${email}`,
      headers: {
        'Accept': 'application/json',
        'AuthProvider': 'EXTERNAL',
        'Authorization': `${token_type} ${access_token}`,
      },
    };
    const response = await axios(config);
    return 'test@123.com';
  };
}

export default new AuthServices();
