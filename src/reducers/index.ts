import { combineReducers } from 'redux';
import counterCombinedReducer from '../components/Counter/redux/reducer';
import commonReducer from '../common/redux/reducer';

const rootReducer = combineReducers({
  counterReducer: counterCombinedReducer,
  commonReducer: commonReducer
});

export default rootReducer;
