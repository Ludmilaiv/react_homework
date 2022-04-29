import { useState, useEffect } from 'react';
import './App.sass';
import { MessageFunction } from './components/message-function';
import { ShowMessageFunction } from './components/show-message-function';
import { MessageClass } from './components/message-class';
import { ShowMessageClass } from './components/show-message-class';

function App() {
  const [messageList1, setMessageList1] = useState([]);
  const [messageList2, setMessageList2] = useState([]);

  useEffect(() => {
    if (messageList1.length === 0 || messageList1[0].author === 'bot') return;
    const timeout = setTimeout(() => {
      setMessageList1([{author: 'bot', text: `Привет, ${messageList1[0].author}!`}, ...messageList1]);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messageList1]);

  useEffect(() => {
    if (messageList2.length === 0 || messageList2[0].author === 'bot') return;
    const timeout = setTimeout(() => {
      setMessageList2([{author: 'bot', text: `Привет, ${messageList2[0].author}!`}, ...messageList2]);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [messageList2]);

  return (
    <div className="app">
      <div className="app__container">
        <h2>Функциональные компоненты</h2>
        <MessageFunction messageList={messageList1} setMessageList={setMessageList1}/>
        <ShowMessageFunction messageList={messageList1}/>
      </div>
      <div className="app__container">
        <h2>Классовые компоненты</h2>
        <MessageClass messageList={messageList2} setMessageList={setMessageList2}/>
        <ShowMessageClass messageList={messageList2}/>
      </div>
    </div>
  );
}

export default App;
