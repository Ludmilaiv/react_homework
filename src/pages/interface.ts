import React from 'react';
import { IMessages } from '../components/chat-list/interface';
import { Chats, Chat } from '../types';

export interface IShowChatListProps {
  chats: Chats;
  onAddChat: (chats: Chat) => void;
  messages: IMessages;
  setMessages: React.Dispatch<React.SetStateAction<IMessages>>;
}
