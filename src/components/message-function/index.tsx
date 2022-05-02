import { useState, useCallback, FC, memo } from 'react';
import './style.sass';
import { IMessageProps } from './interface';
import { nanoid } from 'nanoid';
import { AUTHOR } from '../../constants';

export const MessageFunction: FC<IMessageProps> = memo<IMessageProps>(({messageList, setMessageList}) => {
  const [textValue, setTextValue] = useState('');
  const [author, setAuthor] = useState('');

  const addMessage = useCallback((text: string, authorName: string) => {
    setMessageList([{text, author: AUTHOR.USER, authorName, id: nanoid()}, ...messageList]);
    setTextValue('');
    setAuthor('');
  }, []);

  return <form className="app__message message-function" action='' onSubmit={e => e.preventDefault()}>
    <input placeholder="Автор" className="app__input message-function__input" type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
    <input placeholder="Сообщение" className="app__input message-function__input" type="text" value={textValue} onChange={e => setTextValue(e.target.value)}/>
    <button className="message-function__button" type="button" onClick={() => addMessage(textValue, author)}>Отправить</button>
  </form>;
});