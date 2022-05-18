export type Author = 'bot' | 'user';
type Message = {
  text: string;
  authorName: string;
  author: Author;
  id: string;
};

export type Chat = {
  name: string;
  id: string;
};

export type Messages = Message[];
export type Chats = Chat[];
