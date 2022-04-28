import { useState } from 'react';
import './App.sass';
import { MessageFunction } from './components/message-function';
import { ShowMessageFunction } from './components/show-message-function';
import { MessageClass } from './components/message-class';
import { ShowMessageClass } from './components/show-message-class';

function App() {
	const [text1, setText1] = useState('');
	const [text2, setText2] = useState('');

	return (
		<div className="app">
			<div className="app__container">
				<h2>Функциональные компоненты</h2>
				<MessageFunction text={text1} setText={setText1}/>
				<ShowMessageFunction text={text1}/>
			</div>
			<div className="app__container">
				<h2>Классовые компоненты</h2>
				<MessageClass text={text2} setText={setText2}/>
				<ShowMessageClass text={text2}/>
			</div>
      
		</div>
	);
}

export default App;
