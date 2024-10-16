import { configureStore } from '@reduxjs/toolkit';
import { compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '@/reducers';
import rootSaga from '@/sagas';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: false // Disable thunk middleware since we're using Saga
      }).concat(sagaMiddleware), // Add Saga middleware
    devTools: true // Enable Redux DevTools in development
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = configureAppStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create custom hooks for typed dispatch and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default configureAppStore;
