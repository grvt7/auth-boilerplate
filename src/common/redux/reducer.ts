import { combineReducers } from 'redux';
import { AnyAction } from 'redux-saga';
import { loginTypes } from './actionTypes';

const initialState = {
  isLoading: false,
  data: {},
  errors: {}
};

export const loginReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case loginTypes.LOGIN_START:
      return {
        ...state,
        isLoading: true
      };
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data
      };
    case loginTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errors: payload.data
      };
    case loginTypes.LOGIN_RESET:
      return {
        ...state,
        isLoading: false,
        data: {},
        error: {}
      };
    default:
      return state;
  }
};
// export const counterReducerComp = (state = initialState, action: AnyAction) => {
//   const { type, payload } = action;
//   switch (type) {
//     case testComponentTypes.COUNTER_INC: {
//       const newCounterValue = state.counter + 1;
//       return { ...state, counter: newCounterValue };
//     }
//     case testComponentTypes.COUNTER_DEC: {
//       const newCounterValue = state.counter === 0 ? 0 : state.counter - 1;
//       return { ...state, counter: newCounterValue };
//     }
//     case testComponentTypes.COUNTER_RESET:
//       return { ...state, counter: 0 };
//     default:
//       return state;
//   }
// };

export default combineReducers({
  login: loginReducer
});
