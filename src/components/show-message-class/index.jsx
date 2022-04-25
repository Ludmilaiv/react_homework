import { Component } from 'react';
import "./style.sass";

export class ShowMessageClass extends Component {
  render() {
    return <div>
      <h3>Отправленное сообщение:</h3>
      <div>{this.props.text}</div>
    </div>
  }
}