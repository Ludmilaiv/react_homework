import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { chatReducer, ChatsState } from './chats/reducer';
import { profileReducer, ProfileState } from './profile/reducer';
import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['profile'],
};

const rootReducer = combineReducers<StoreState>({
  profile: profileReducer,
  chats: chatReducer,
});

const persisteReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persisteReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
