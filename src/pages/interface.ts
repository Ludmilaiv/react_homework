import { Chats } from '../types';

export interface IShowChatListProps {
  chats: Chats;
  onAddChat: (chats: Chats) => void;
}
