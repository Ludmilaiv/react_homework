import { useState, useEffect, useCallback } from 'react';
import { nanoid } from 'nanoid';
import { AUTHOR } from './constants';

import { MessageFormFunction } from './components/message-form-function';
import { MessageListFunction } from './components/message-list-function';
import { MessageFormClass } from './components/message-form-class';
import { MessageListClass } from './components/message-list-class';
import { TAuthor, TMessages } from './types';

import './App.sass';

function App() {
  const [messageList1, setMessageList1] = useState<TMessages>([]);
  const [messageList2, setMessageList2] = useState<TMessages>([]);

  useEffect(() => {
    if (messageList1.length === 0 || messageList1[0].author === AUTHOR.BOT) return;
    const timeout = setTimeout(() => {
      setMessageList1([{authorName: 'bot', author: AUTHOR.BOT, text: `Привет, ${messageList1[0].authorName}!`, id: nanoid()}, ...messageList1]);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messageList1]);

  useEffect(() => {
    if (messageList2.length === 0 || messageList2[0].author === AUTHOR.BOT) return;
    const timeout = setTimeout(() => {
      setMessageList2([{authorName: 'bot', author: AUTHOR.BOT, text: `Привет, ${messageList2[0].authorName}!`, id: nanoid()}, ...messageList2]);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messageList2]);

  const addMessage1 = useCallback((text: string, author: TAuthor, authorName: string) => {
    setMessageList1((prevMessage) => [{text, author, authorName, id: nanoid()}, ...prevMessage]);
  }, []);

  const addMessage2 = (text: string, author: TAuthor, authorName: string) => {
    setMessageList2([{text, author, authorName, id: nanoid()}, ...messageList2]);
  };

  return (
    <div className="app">
      <div className="app__container">
        <h2>Функциональные компоненты</h2>
        <MessageFormFunction addMessage={addMessage1}/>
        <MessageListFunction messageList={messageList1}/>
      </div>
      <div className="app__container">
        <h2>Классовые компоненты</h2>
        <MessageFormClass addMessage={addMessage2}/>
        <MessageListClass messageList={messageList2}/>
      </div>
    </div>
  );
}

export default App;
