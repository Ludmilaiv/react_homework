import { TAuthor } from '../../types';

export interface IMessageProps {
  addMessage: (text: string, author: TAuthor, authorName: string) => void;
}

export interface IMessageState {
  textValue: string;
  author: string
}