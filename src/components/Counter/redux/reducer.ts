import { combineReducers } from 'redux';
import { AnyAction } from 'redux-saga';
import { testComponentTypes } from './actionTypes';

const initialState = {
  counter: 0
};

export const counterReducerComp = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case testComponentTypes.COUNTER_INC: {
      const newCounterValue = state.counter + 1;
      return { ...state, counter: newCounterValue };
    }
    case testComponentTypes.COUNTER_DEC: {
      const newCounterValue = state.counter === 0 ? 0 : state.counter - 1;
      return { ...state, counter: newCounterValue };
    }
    case testComponentTypes.COUNTER_RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
};

export default combineReducers({
  counterReducer: counterReducerComp
});
