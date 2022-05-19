import { createStore, compose, combineReducers } from 'redux';
import { chatReducer, ChatsState } from './chats/reducer';
import { profileReducer, ProfileState } from './profile/reducer';

declare const window: Window &
  typeof globalThis & {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  };

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState;
  chats: ChatsState;
}

export const store = createStore(
  combineReducers<StoreState>({ profile: profileReducer, chats: chatReducer }),
  composeEnhancers()
);
