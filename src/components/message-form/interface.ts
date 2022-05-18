import { Author } from '../../types';

export interface IMessageFormProps {
  addMessage: (text: string, author: Author, authorName: string) => void;
}
