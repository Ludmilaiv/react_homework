import { FC, useState, useEffect, useCallback } from 'react';
import { MessageForm } from '../components/message-form';
import { MessageList } from '../components/message-list';
import { Author, Messages } from '../types';
import { ChatList } from '../components/chat-list';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { nanoid } from 'nanoid';
import { AUTHOR } from '../constants';
import { orange } from '@mui/material/colors';
import { IShowChatListProps } from './interface';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: orange[200],
    },
  },
});

export const ChatsPage: FC<IShowChatListProps> = ({ chats, onAddChat }) => {
  const [messageList, setMessageList] = useState<Messages>([]);

  useEffect(() => {
    if (messageList.length === 0 || messageList[0].author === AUTHOR.BOT)
      return;
    const timeout = setTimeout(() => {
      setMessageList([
        {
          authorName: 'bot',
          author: AUTHOR.BOT,
          text: `Привет, ${messageList[0].authorName}!`,
          id: nanoid(),
        },
        ...messageList,
      ]);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messageList]);

  const addMessage = useCallback(
    (text: string, author: Author, authorName: string) => {
      setMessageList((prevMessage) => [
        { text, author, authorName, id: nanoid() },
        ...prevMessage,
      ]);
    },
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <h2>Чат</h2>
      <MessageForm addMessage={addMessage} />
      <div className="app__chat-wrp">
        <ChatList chats={chats} onAddChat={onAddChat} />
        <MessageList messageList={messageList} />
      </div>
    </ThemeProvider>
  );
};
