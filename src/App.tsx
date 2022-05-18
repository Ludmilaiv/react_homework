import { FC, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Wrapper } from './components/wrapper';
import { ChatList } from './components/chat-list';
import { Chat } from './types';
import { AUTHOR } from './constants';

import './App.sass';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { ChatPage } from './pages/ChatPage';
import { IMessages } from './components/chat-list/interface';
import { nanoid } from 'nanoid';

const initialMessage: IMessages = {
  default: [
    {
      id: '1',
      author: AUTHOR.USER,
      authorName: 'Default',
      text: 'Hello, Geekbrains',
    },
  ],
};

export const App: FC = () => {
  const [messages, setMessages] = useState(initialMessage);

  const chatList = useMemo(() => {
    return Object.entries(messages).map((elem) => ({
      id: nanoid(),
      name: elem[0],
    }));
  }, [Object.entries(messages).length]);

  const onAddChat = (chat: Chat) => {
    setMessages({ ...messages, [chat.name]: [] });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="chats">
              <Route
                index
                element={<ChatList chats={chatList} onAddChat={onAddChat} />}
              />
              <Route
                path=":chatId"
                element={
                  <ChatPage
                    chats={chatList}
                    onAddChat={onAddChat}
                    messages={messages}
                    setMessages={setMessages}
                  />
                }
              />
            </Route>
          </Route>
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
