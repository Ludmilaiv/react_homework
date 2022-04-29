import { Component } from 'react';
import './style.sass';

export class MessageClass extends Component {

  constructor(props) {
    super(props);
    this.state = {textValue: '', author: ''};
  }

  render() {
    return <form className="app__message message-class" action='' onSubmit={e => e.preventDefault()}>
      <input placeholder="Автор" className="app__input message-class__input" type="text" value={this.state.author} onChange={e => this.setState({author: e.target.value})}/>
      <input placeholder="Сообщение" className="app__input message-class__input" type="text" value={this.state.textValue} onChange={e => this.setState({textValue: e.target.value})}/>
      <button className="message-class__button" type="button" onClick={() => {
        this.props.setMessageList([{text: this.state.textValue, author: this.state.author}, ...this.props.messageList]);
        this.setState({textValue: '', author: ''});
      }}>Отправить</button>
    </form>;
  }
}