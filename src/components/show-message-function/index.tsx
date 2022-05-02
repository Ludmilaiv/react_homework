import { FC } from 'react';
import { IShowMessageProps } from './interface';

export const ShowMessageFunction: FC<IShowMessageProps> = ({messageList}) => {
  return <ul className='app__message-list'>{messageList.map(elem => (
    <li key={elem.id}>
      <b>{elem.author}: </b><span>{elem.text}</span>
    </li>
  ))}</ul>;
};