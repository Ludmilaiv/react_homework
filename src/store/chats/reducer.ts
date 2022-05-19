import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from './actions';
import { Reducer } from 'redux';
import { ChatsActions } from './types';
import { nanoid } from 'nanoid';
import { AUTHOR } from '../../constants';

export interface Message {
  id: string;
  author: string;
  authorName: string;
  value: string;
}

export interface ChatsState {
  [key: string]: {
    chatName: string;
    messages: Message[];
  };
}

const initialState: ChatsState = {
  gb: {
    chatName: 'default',
    messages: [
      {
        id: '1',
        author: AUTHOR.USER,
        authorName: 'default',
        value: 'Hello geekbrains',
      },
    ],
  },
};

export const chatReducer: Reducer<ChatsState, ChatsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatId]: {
          chatName: action.chatName,
          messages: [],
        },
      };
    }
    case DELETE_CHAT: {
      const chats = { ...state };
      delete chats[action.chatId];
      return chats;
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatId]: {
          chatName: state[action.chatId].chatName,
          messages: [
            ...state[action.chatId].messages,
            {
              id: nanoid(),
              author: AUTHOR.USER,
              authorName: action.authorName,
              value: action.message,
            },
          ],
        },
      };
    }

    default:
      return state;
  }
};
