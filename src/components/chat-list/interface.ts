import { Messages } from '../../types';

export interface IMessages {
  [key: string]: { chatName: string; messages: Messages };
}
