import { nanoid } from 'nanoid';
import { Dispatch } from 'redux';
import { AUTHOR } from '../../constants';
import { Message } from './types';
import { AddChat, AddMessage, DeleteChat } from './types';

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';

export const addChat: AddChat = (chatName: string) => ({
  type: ADD_CHAT,
  chatName,
  chatId: nanoid(),
});

export const deleteChat: DeleteChat = (chatId: string) => ({
  type: DELETE_CHAT,
  chatId,
});

export const addMessage: AddMessage = (chatId: string, message: Message) => ({
  type: ADD_MESSAGE,
  chatId,
  message,
});

let timeout: NodeJS.Timeout;

export const addMessageWithReply =
  (chatId: string, message: Message) =>
  (dispatch: Dispatch<ReturnType<AddMessage>>) => {
    dispatch(addMessage(chatId, message));

    if (message.author !== AUTHOR.BOT) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        dispatch(
          addMessage(chatId, {
            text: 'Hello!',
            author: AUTHOR.BOT,
            authorName: 'Bot',
          })
        );
      }, 1000);
    }
  };
