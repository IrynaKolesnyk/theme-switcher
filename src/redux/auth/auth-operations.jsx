import axios from 'axios';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = user => async dispatch => {
  console.log('register operation');
  dispatch(registerRequest());
  try {
    const response = await axios.post('/users/signup', user);
    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(registerError(error.message));
  }
};

export const login = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/users/login', user);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    console.log(error.message);
    dispatch(loginError(error.message));
  }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    console.log(error.message);
    dispatch(logoutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

// finally {
//     setTimeout(() => {
//       dispatch(registerError(null));
//     }, 2000);
//   }
