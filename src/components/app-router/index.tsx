import { FC, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutWithConnect } from '../../pages/About';
import { ChatPage } from '../../pages/ChatPage/ChatPage';
import { Home } from '../../pages/Home';
import { Profile } from '../../pages/Profile';
import { ChatList } from '../chat-list';
import { Wrapper } from '../wrapper';

export const AppRouter: FC = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route index element={<ChatList />} />
            <Route path=":chatId" element={<ChatPage />} />
          </Route>
          <Route path="about" element={<AboutWithConnect />} />
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
