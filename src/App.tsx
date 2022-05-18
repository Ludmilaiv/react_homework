import { FC, useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Wrapper } from './components/wrapper';
import { ChatList } from './components/chat-list';
import { Chat } from './types';
import { AUTHOR } from './constants';
import './App.sass';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { IMessages } from './components/chat-list/interface';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
import { store } from './store';

const initialMessage: IMessages = {
  defaultId: {
    chatName: 'default',
    messages: [
      {
        id: '1',
        author: AUTHOR.USER,
        authorName: 'Default',
        text: 'Hello, Geekbrains',
      },
    ],
  },
};

export const App: FC = () => {
  const [messages, setMessages] = useState(initialMessage);
  const [theme, setTheme] = useState(defaultContext.theme);

  const chatList = useMemo(() => {
    return Object.entries(messages).map((elem) => ({
      id: elem[0],
      name: elem[1].chatName,
    }));
  }, [Object.entries(messages).length]);

  const onAddChat = (chat: Chat) => {
    setMessages({
      ...messages,
      [chat.id]: { chatName: chat.name, messages: [] },
    });
  };

  const onRemoveChat = (chatId?: string) => {
    if (!chatId) return;
    const newMessages: IMessages = {};
    for (const key in messages) {
      if (key !== chatId) {
        newMessages[key] = {
          chatName: messages[key].chatName,
          messages: [...messages[key].messages],
        };
      }
    }
    setMessages(newMessages);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Wrapper />}>
                <Route index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="chats">
                  <Route
                    index
                    element={
                      <ChatList chats={chatList} onAddChat={onAddChat} />
                    }
                  />
                  <Route
                    path=":chatId"
                    element={
                      <ChatPage
                        chats={chatList}
                        onAddChat={onAddChat}
                        onRemoveChat={onRemoveChat}
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
      </ThemeContext.Provider>
    </Provider>
  );
};
