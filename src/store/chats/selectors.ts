import { StoreState } from '..';

export const selectChats = (state: StoreState) => state.chats;

export const selectChatList = (state: StoreState) =>
  Object.entries(state.chats).map((elem) => ({
    id: elem[0],
    name: elem[1].chatName,
  }));
