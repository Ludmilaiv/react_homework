import { useState } from 'react';
import './style.sass';

export const MessageFunction = ({messageList, setMessageList}) => {
	const [textValue, setTextValue] = useState('');
	const [author, setAuthor] = useState('');

	return <form className="app__message message-function" action='' onSubmit={e => e.preventDefault()}>
		<input placeholder="Автор" className="app__input message-function__input" type="text" value={author} onChange={e => setAuthor(e.target.value)}/>
		<input placeholder="Сообщение" className="app__input message-function__input" type="text" value={textValue} onChange={e => setTextValue(e.target.value)}/>
		<button className="message-function__button" type="button" onClick={() => {
			setMessageList([{text: textValue, author: author}, ...messageList]);
			setTextValue('');
			setAuthor('');
		}}>Отправить</button>
	</form>;
};