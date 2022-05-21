import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/chats/actions';
import { Button } from './components/button';
import { Input } from './components/input';
import { useParams } from 'react-router-dom';

export const MessageForm = memo(() => {
  const [textValue, setTextValue] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const { chatId } = useParams();

  return (
    <form
      className="app__message message-function"
      role="form"
      action=""
      onSubmit={(e) => {
        if (!chatId) return;
        e.preventDefault();
        dispatch(addMessage(chatId, textValue, author));
        setTextValue('');
        setAuthor('');
      }}
    >
      <Input
        autofocus={true}
        placeholder="Автор"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <Input
        autofocus={false}
        placeholder="Сообщение"
        value={textValue}
        onChange={(e) => setTextValue((e.target as HTMLInputElement).value)}
      />
      <Button disabled={!textValue || !author} content="Отправить" />
    </form>
  );
});
