import { FC } from 'react';

import { MessageForm } from '../../components/message-form';
import { MessageList } from '../../components/message-list';
import { ChatList } from '../../components/chat-list';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Navigate, useParams } from 'react-router-dom';
import { WithClasses } from '../../HOC/WithClasses';

import style from './ChatPage.module.css';
import { useSelector } from 'react-redux';
import { selectChats } from '../../store/chats/selectors';

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

export const ChatPage: FC = () => {
  const { chatId } = useParams();
  const MessageListWithClass = WithClasses(MessageList);

  const chats = useSelector(selectChats);

  if (chatId && !chats[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <h2>Чат</h2>
      <MessageForm />
      <div className="app__chat-wrp">
        <ChatList />
        <MessageListWithClass
          messageList={chatId && chats[chatId] ? chats[chatId].messages : []}
          classes={style.border}
        />
      </div>
    </ThemeProvider>
  );
};
