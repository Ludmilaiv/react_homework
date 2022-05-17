import { Author } from '../../types';

export interface IMessageProps {
  addMessage: (text: string, author: Author, authorName: string) => void;
}

export interface IMessageState {
  textValue: string;
  author: string;
}
