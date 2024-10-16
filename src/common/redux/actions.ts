import { loginTypes } from './actionTypes';

export const login = (payload: any) => ({
  type: loginTypes.LOGIN,
  payload
});

export const loginStart = () => ({
  type: loginTypes.LOGIN_START
});

export const loginSuccess = (payload: any) => ({
  type: loginTypes.LOGIN_START,
  payload
});

export const loginFail = (payload: any) => ({
  type: loginTypes.LOGIN_FAIL,
  payload
});

export const loginReset = () => ({
  type: loginTypes.LOGIN_RESET
});
