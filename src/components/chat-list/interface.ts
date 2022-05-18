import { Chats, Chat, Messages } from '../../types';

export interface IShowChatListProps {
  chats: Chats;
  onAddChat: (chats: Chat) => void;
}

export interface IMessages {
  [key: string]: Messages;
}
