// import { call, takeLatest } from 'redux-saga/effects';
// import * as actions from './actions';
// import { testComponentTypes } from './actionTypes';

// const api = '';

// function* counter({ params, payload }) {
//   yield put(actions.counterInc());

//   try {
//     const response = yeild call(api, params, payload);
//     yield put(action.success(response))
//   }
//   catch (error) {
//     const error = (error && error.response && error.response.data) || {}
//     yield put(actions.fail(error))
//   }
// }

// counterSaga goes in combined saga
// function* counterSaga() {
//   yield takeLatest(testComponentTypes.COUNTER_INC, counter);
//   //   yield takeLatest(testComponentTypes.COUNTER_INC, sagaCounterInc);
//   //   yield takeLatest(testComponentTypes.COUNTER_INC, sagaCounterInc);
// }

// export { counterSaga };
