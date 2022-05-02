import { Component } from 'react';
import { IShowMessageProps } from './interface';

export class ShowMessageClass extends Component<IShowMessageProps> {
  render() {
    return <ul className='app__message-list'>{this.props.messageList.map(elem => (
      <li key={elem.id}>
        <b>{elem.authorName}: </b><span>{elem.text}</span>
      </li>
    ))}</ul>;
  }
}