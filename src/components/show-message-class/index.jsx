import { Component } from 'react';

export class ShowMessageClass extends Component {
  render() {
    return <ul className='app__message-list'>{this.props.messageList.map((elem, index) => (
      //TODO Индекс массива в качестве ключа - это не очень хорошая практика. Это временно, пока у сообщений нет ID 
      <li key={index}>
        <b>{elem.author}: </b><span>{elem.text}</span>
      </li>
    ))}</ul>;
  }
}