import axios from 'axios';
import qs from 'qs';
import Constants from '@Utils/constants';

class AuthServices {
  getAuthTokan = async (payload) => {
    console.log(payload);
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
    const response = await axios(config);
    console.log(response.data);
    //const response = 'adfasdasdfadgadfa';
    return response.data;
  };
  getAuthTokanReg = async (payload) => {
    console.log("Email: ",payload.Email);
    console.log("Password: ",payload.Password);
    const data = qs.stringify({
      //...payload,
      username:payload.Email,
      password:payload.Password,
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
    const response = await axios(config);
    console.log(response.data);
    //const response = 'adfasdasdfadgadfa';
    return response.data;
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
    return response.data;
  };

  registerUser = async (payload) => {
    console.log("Register User:",payload);
    const data = qs.stringify({
      ...payload,
      grant_type: 'password',
      scope: 'customer',
      authprovider: 'EXTERNAL',
    });
    var config = {
      method: 'post',
      url: `${Constants.CREATE_USER}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data
    };
    const response = await axios(config);
    //console.log("Response:", response);
    return response;
  };

}

export default new AuthServices();
