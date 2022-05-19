import { FC, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';

import { MessageForm } from '../../components/message-form';
import { MessageList } from '../../components/message-list';
import { Author } from '../../types';
import { ChatList } from '../../components/chat-list';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AUTHOR } from '../../constants';
import { orange } from '@mui/material/colors';
import { IShowChatListProps } from '../interface';
import { Navigate, useParams } from 'react-router-dom';
import { WithClasses } from '../../HOC/WithClasses';

import style from './ChatPage.module.css';

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
  onRemoveChat,
  messages,
  setMessages,
}) => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);
  useEffect(() => {
    if (
      !chatId ||
      !messages[chatId] ||
      messages[chatId].messages.length === 0 ||
      messages[chatId].messages[0].author === AUTHOR.BOT
    )
      return;
    const timeout = setTimeout(() => {
      setMessages({
        ...messages,
        [chatId]: {
          chatName: messages[chatId].chatName,
          messages: [
            {
              authorName: 'bot',
              author: AUTHOR.BOT,
              text: `Привет, ${messages[chatId].messages[0].authorName}!`,
              id: nanoid(),
            },
            ...messages[chatId].messages,
          ],
        },
      });
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messages, chatId]);

  const addMessage = useCallback(
    (text: string, author: Author, authorName: string) => {
      if (!chatId) return;
      setMessages({
        ...messages,
        [chatId]: {
          chatName: messages[chatId].chatName,
          messages: [
            {
              authorName,
              author,
              text,
              id: nanoid(),
            },
            ...messages[chatId].messages,
          ],
        },
      });
    },
    [messages, chatId]
  );

  if (chatId && !messages[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <h2>Чат</h2>
      <MessageForm addMessage={addMessage} />
      <div className="app__chat-wrp">
        <ChatList chats={chats} onAddChat={onAddChat} />
        <MessageListWithClass
          messageList={
            chatId && messages[chatId] ? messages[chatId].messages : []
          }
          classes={style.border}
        />
      </div>
      <button type="button" onClick={() => onRemoveChat(chatId)}>
        Remove chat
      </button>
    </ThemeProvider>
  );
};
