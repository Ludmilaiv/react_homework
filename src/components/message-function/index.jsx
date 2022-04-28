import { useState } from "react";
import "./style.sass";

export const MessageFunction = ({text, setText}) => {
  const [textValue, setTextValue] = useState(text);

  return <div className="app__message message-function">
  <input className="app__input message-function__input" type="text" value={textValue} onChange={e => setTextValue(e.target.value)}/>
  <button className="message-function__button" type="button" onClick={() => setText(textValue)}>Отправить</button>
</div>
}