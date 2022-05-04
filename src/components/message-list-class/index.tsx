import { Component } from 'react';
import { IShowMessageProps } from './interface';

export class MessageListClass extends Component<IShowMessageProps> {
  render() {
    return <ul className='app__message-list app__message-list_full-size'>{this.props.messageList.map(elem => (
      <li key={elem.id}>
        <b>{elem.authorName}: </b><span>{elem.text}</span>
      </li>
    ))}</ul>;
  }
}