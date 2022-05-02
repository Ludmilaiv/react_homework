import { Component } from 'react';
import './style.sass';
import { IMessageProps, IMessageState } from './interface';
import { AUTHOR } from '../../constants';

export class MessageClass extends Component<IMessageProps, IMessageState> {

  constructor(props: IMessageProps) {
    super(props);
    this.state = {textValue: '', author: ''};
  }

  render() {
    return <form className="app__message message-class" action='' onSubmit={e => {
      e.preventDefault();
      this.props.addMessage(this.state.textValue, AUTHOR.USER, this.state.author);
      this.setState({textValue: '', author: ''});
    }}>
      <input placeholder="Автор" className="app__input message-class__input" type="text" value={this.state.author} onChange={e => this.setState({author: e.target.value})}/>
      <input placeholder="Сообщение" className="app__input message-class__input" type="text" value={this.state.textValue} onChange={e => this.setState({textValue: e.target.value})}/>
      <button className="message-class__button" type="submit">Отправить</button>
    </form>;
  }
}