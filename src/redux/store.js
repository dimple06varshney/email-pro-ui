import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import storePersist, { localStorageHealthCheck } from './storePersist';

localStorageHealthCheck();

const AUTH_INITIAL_STATE = {
  current: {},
  isLoggedIn: false,
  isLoading: false,
  isSuccess: false,
};

const auth_state = storePersist.get('auth') ? storePersist.get('auth') : AUTH_INITIAL_STATE;
console.log("storePersist.get('auth')__", storePersist.get('auth'));
console.log("auth_state__", auth_state);
const initialState = { auth: auth_state };
console.log("initialState__",initialState);
const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  // devTools: import.meta.env.PROD === false, // Enable Redux DevTools in development mode
});

export default store;
