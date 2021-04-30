import {
  INITIALISE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SET_FILIAL,
  SET_LOADING
} from './auth-constants';

export const initialise = () => {
  return {
    type: INITIALISE
  };
};

export const setLoading = loading => {
  return {
    type: SET_LOADING,
    loading
  };
};

export const setFilial = filiais => {
  return {
    type: SET_FILIAL,
    filiais
  };
};

export const loginRequest = payload => {
  return {
    type: LOGIN_REQUEST,
    payload
  };
};

export const loginSuccess = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload
  };
};

export const logoutRequest = () => {
  return { type: LOGOUT_REQUEST };
};

export const logoutSuccess = () => {
  return { type: LOGOUT_SUCCESS };
};
