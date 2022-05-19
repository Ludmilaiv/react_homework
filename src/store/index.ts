import { createStore, compose } from 'redux';
import { profileReducer } from './profile/reducer';

declare const window: Window &
  typeof globalThis & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  };

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(profileReducer, composeEnhancers());
