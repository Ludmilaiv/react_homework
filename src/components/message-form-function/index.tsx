import { useState, FC, memo } from 'react';
import './style.sass';
import { IMessageProps } from './interface';
import { AUTHOR } from '../../constants';
import { Button } from './components/button';
import { Input } from './components/input';

export const MessageFormFunction: FC<IMessageProps> = memo<IMessageProps>(({addMessage}) => {
  const [textValue, setTextValue] = useState('');
  const [author, setAuthor] = useState('');

  return <form className="app__message message-function" role='form' action='' onSubmit={e => {
    e.preventDefault();
    addMessage(textValue, AUTHOR.USER, author);
    setTextValue('');
    setAuthor('');
  }}>
    <Input placeholder="Автор" className="app__input message-function__input" value={author} onChange={e => setAuthor(e.target.value)}/>
    <Input 
      placeholder="Сообщение" 
      className="app__input message-function__input" 
      value={textValue} 
      onChange={e => setTextValue((e.target as HTMLInputElement).value)} 
    />
    <Button className="message-function__button" disabled={!textValue || !author} content='Отправить' />
  </form>;
});