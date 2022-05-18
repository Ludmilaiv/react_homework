import { FC, useEffect, useCallback } from 'react';
import { MessageForm } from '../components/message-form';
import { MessageList } from '../components/message-list';
import { Author } from '../types';
import { ChatList } from '../components/chat-list';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { nanoid } from 'nanoid';
import { AUTHOR } from '../constants';
import { orange } from '@mui/material/colors';
import { IShowChatListProps } from './interface';
import { Navigate, useParams } from 'react-router-dom';

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

export const ChatPage: FC<IShowChatListProps> = ({
  chats,
  onAddChat,
  messages,
  setMessages,
}) => {
  const { chatId } = useParams();
  const chatName = chats.find((el) => el.id === chatId)?.name;

  useEffect(() => {
    if (
      !chatName ||
      !messages[chatName] ||
      messages[chatName].length === 0 ||
      messages[chatName][0].author === AUTHOR.BOT
    )
      return;
    const timeout = setTimeout(() => {
      setMessages({
        ...messages,
        [chatName]: [
          {
            authorName: 'bot',
            author: AUTHOR.BOT,
            text: `Привет, ${messages[chatName][0].authorName}!`,
            id: nanoid(),
          },
          ...messages[chatName],
        ],
      });
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messages, chatName]);

  const addMessage = useCallback(
    (text: string, author: Author, authorName: string) => {
      if (!chatName) return;
      if (!messages[chatName]) {
        setMessages({
          [chatName]: [
            {
              authorName,
              author,
              text,
              id: nanoid(),
            },
          ],
        });
        return;
      }
      setMessages({
        ...messages,
        [chatName]: [
          {
            authorName,
            author,
            text,
            id: nanoid(),
          },
          ...messages[chatName],
        ],
      });
    },
    [messages, chatId]
  );

  if (chatName && !messages[chatName]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <h2>Чат</h2>
      <MessageForm addMessage={addMessage} />
      <div className="app__chat-wrp">
        <ChatList chats={chats} onAddChat={onAddChat} />
        <MessageList
          messageList={chatName && messages[chatName] ? messages[chatName] : []}
        />
      </div>
    </ThemeProvider>
  );
};
