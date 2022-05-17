import { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { AUTHOR } from './constants';

import { MessageFormFunction } from './components/message-form-function';
import { MessageListFunction } from './components/message-list-function';
import { MessageFormClass } from './components/message-form-class';
import { MessageListClass } from './components/message-list-class';
import { ChatList } from './components/chat-list';
import { Author, Messages, Chats } from './types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import './App.sass';

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

const chats: Chats = [
  { id: 'chat1', name: 'My chat 1' },
  { id: 'chat2', name: 'My chat 2' },
  { id: 'chat3', name: 'My chat 3' },
];

function App() {
  const [messageList1, setMessageList1] = useState<Messages>([]);
  const [messageList2, setMessageList2] = useState<Messages>([]);
  const [chatList, setChatList] = useState(chats);

  useEffect(() => {
    if (messageList1.length === 0 || messageList1[0].author === AUTHOR.BOT)
      return;
    const timeout = setTimeout(() => {
      setMessageList1([
        {
          authorName: 'bot',
          author: AUTHOR.BOT,
          text: `Привет, ${messageList1[0].authorName}!`,
          id: nanoid(),
        },
        ...messageList1,
      ]);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messageList1]);

  useEffect(() => {
    if (messageList2.length === 0 || messageList2[0].author === AUTHOR.BOT)
      return;
    const timeout = setTimeout(() => {
      setMessageList2([
        {
          authorName: 'bot',
          author: AUTHOR.BOT,
          text: `Привет, ${messageList2[0].authorName}!`,
          id: nanoid(),
        },
        ...messageList2,
      ]);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messageList2]);

  const addMessage1 = useCallback(
    (text: string, author: Author, authorName: string) => {
      setMessageList1((prevMessage) => [
        { text, author, authorName, id: nanoid() },
        ...prevMessage,
      ]);
    },
    []
  );

  const addMessage2 = (text: string, author: Author, authorName: string) => {
    setMessageList2([
      { text, author, authorName, id: nanoid() },
      ...messageList2,
    ]);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <div className="app__container">
          <h2>Функциональные компоненты</h2>
          <MessageFormFunction addMessage={addMessage1} />
          <div className="app__chat-wrp">
            <ChatList chats={chatList} />
            <MessageListFunction messageList={messageList1} />
          </div>
        </div>
        <div className="app__container">
          <h2>Классовые компоненты</h2>
          <MessageFormClass addMessage={addMessage2} />
          <MessageListClass messageList={messageList2} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
