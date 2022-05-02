import { useState, FC, memo } from 'react';
import './style.sass';
import { IMessageProps } from './interface';
import { AUTHOR } from '../../constants';

export const MessageFunction: FC<IMessageProps> = memo<IMessageProps>(({addMessage}) => {
  const [textValue, setTextValue] = useState('');
  const [author, setAuthor] = useState('');

  return <form className="app__message message-function" action='' onSubmit={e => {
    e.preventDefault();
    addMessage(textValue, AUTHOR.USER, author);
    setTextValue('');
    setAuthor('');
  }}>
    <input placeholder="Автор" className="app__input message-function__input" type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
    <input placeholder="Сообщение" className="app__input message-function__input" type="text" value={textValue} onChange={e => setTextValue(e.target.value)}/>
    <button className="message-function__button" type="submit">Отправить</button>
  </form>;
});