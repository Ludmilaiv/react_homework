import { TMessages } from '../../types';

export interface IMessageProps {
  messageList: TMessages;
  setMessageList: (messageList: TMessages) => void;
}
