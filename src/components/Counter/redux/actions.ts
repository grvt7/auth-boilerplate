import { testComponentTypes } from './actionTypes';

export const counterInc = () => ({
  type: testComponentTypes.COUNTER_INC
});

export const counterDec = () => ({
  type: testComponentTypes.COUNTER_DEC
});

export const counterReset = () => ({
  type: testComponentTypes.COUNTER_RESET
});
