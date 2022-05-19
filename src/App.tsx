import { Suspense } from 'react';
import { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Wrapper } from './components/wrapper';
import { ChatList } from './components/chat-list';
import './App.sass';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { ChatPage } from './pages/ChatPage/ChatPage';

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className="app">
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
              </Route>
              <Route path="*" element={<h1>Error 404</h1>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
};
