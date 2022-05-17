import { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Wrapper } from './components/wrapper';
import { ChatList } from './components/chat-list';
import { Chats } from './types';

import './App.sass';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { ChatsPage } from './pages/ChatsPage';

const initialChats: Chats = [
  { id: 'chat1', name: 'My chat 1' },
  { id: 'chat2', name: 'My chat 2' },
  { id: 'chat3', name: 'My chat 3' },
];

export const App: FC = () => {
  const [chatList, setChatList] = useState(initialChats);
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
                element={<ChatList chats={chatList} onAddChat={setChatList} />}
              />
              <Route
                path=":chatId"
                element={<ChatsPage chats={chatList} onAddChat={setChatList} />}
              />
            </Route>
          </Route>
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
