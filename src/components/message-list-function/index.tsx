import { FC } from 'react';
import { IShowMessageProps } from './interface';

export const MessageListFunction: FC<IShowMessageProps> = ({messageList}) => {
  return <ul className='app__message-list' role='list'>{messageList.map(elem => (
    <li key={elem.id}>
      <b>{elem.authorName}: </b><span>{elem.text}</span>
    </li>
  ))}</ul>;
};