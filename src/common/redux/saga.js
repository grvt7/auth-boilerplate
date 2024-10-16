/* eslint-disable */
import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { loginTypes } from './actionTypes';
import { UserService } from '@/services/UserService';

function* loginSaga({ payload }) {
  yield put(actions.loginStart());
  try {
    const response = yield call(UserService.loginUser, payload);

    yield put(actions.loginSuccess(response));
  } catch (error) {
    const errorResponse =
      (error && error.response && error.response.data) || {};

    yield put(actions.loginFail(errorResponse));
  }
}

function* commonSaga() {
  yield takeLatest(loginTypes.LOGIN, loginSaga);
}

export { commonSaga };
