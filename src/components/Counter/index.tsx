'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { testComponentTypes } from './redux/actionTypes';
import { RootState } from '@/store';

const Counter = () => {
  const { counter } = useSelector(
    (state: RootState) => state.counterReducer.counterReducer
  );
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: testComponentTypes.COUNTER_INC });
  };
  const handleReset = () => {
    dispatch({ type: testComponentTypes.COUNTER_RESET });
  };
  const handleDecrement = () => {
    dispatch({ type: testComponentTypes.COUNTER_DEC });
  };
  return (
    <>
      <div className="px-16 py-16 my-16 mx-16 bg-red-300 text-9xl">
        Counter :{` ${counter}`}
      </div>
      <div className="mx-16 px-16 my-16 py-16 flex bg-gray-600 justify-between">
        <button name="inc" onClick={() => handleIncrement()}>
          Increment + 1
        </button>
        <button name="inc" onClick={() => handleReset()}>
          Reset
        </button>
        <button name="inc" onClick={() => handleDecrement()}>
          Decrement - 1
        </button>
      </div>
    </>
  );
};

export default Counter;
