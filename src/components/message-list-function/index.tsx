import { FC } from 'react';
import { IShowMessageListProps } from './interface';

export const MessageListFunction: FC<IShowMessageListProps> = ({messageList}) => {
  return <ul className='app__message-list' role='list'>{messageList.map(elem => (
    <li key={elem.id}>
      <b>{elem.authorName}: </b><span>{elem.text}</span>
    </li>
  ))}</ul>;
};