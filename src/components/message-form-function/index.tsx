import { useState, FC, memo } from 'react';
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
    <Input autofocus={true} placeholder="Автор" value={author} onChange={e => setAuthor(e.target.value)}/>
    <Input 
      autofocus={false}
      placeholder="Сообщение" 
      value={textValue} 
      onChange={e => setTextValue((e.target as HTMLInputElement).value)} 
    />
    <Button disabled={!textValue || !author} content='Отправить' />
  </form>;
});