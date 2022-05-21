import { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from '../../store/chats/actions';
import { Button } from './components/button';
import { Input } from './components/input';
import { useParams } from 'react-router-dom';
import { AUTHOR } from '../../constants';
import { ThunkDispatch } from 'redux-thunk';
import { ChatsState } from '../../store/chats/reducer';
import { AddMessage } from '../../store/chats/types';

export const MessageForm = memo(() => {
  const [textValue, setTextValue] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch =
    useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMessage>>>();

  const { chatId } = useParams();

  return (
    <form
      className="app__message message-function"
      role="form"
      action=""
      onSubmit={(e) => {
        if (!chatId || !textValue) return;
        e.preventDefault();
        dispatch(
          addMessageWithReply(chatId, {
            text: textValue,
            author: AUTHOR.USER,
            authorName: author,
          })
        );
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
