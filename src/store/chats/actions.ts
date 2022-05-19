import { AddChat, AddMessage, DeleteChat } from './types';

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';

export const addChat: AddChat = (chatName: string, chatId: string) => ({
  type: ADD_CHAT,
  chatName,
  chatId,
});

export const deleteChat: DeleteChat = (chatId: string) => ({
  type: DELETE_CHAT,
  chatId,
});

export const addMessage: AddMessage = (
  chatId: string,
  message: string,
  authorName: string
) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
  authorName,
});
