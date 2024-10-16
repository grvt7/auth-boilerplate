import { commonSaga } from '@/common/redux/saga';
import { all } from 'redux-saga/effects';

// Single extry point to start all Sagas at once
export default function* rootSaga() {
  yield all([commonSaga()]);
}
