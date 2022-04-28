import { Component } from 'react';

export class MessageClass extends Component {

	constructor(props) {
		super(props);
		this.state = {textValue: this.props.text};
	}

	render() {
		return <div className="app__message message-class">
			<input className="app__input message-class__input" type="text" value={this.state.textValue} onChange={e => this.setState({textValue: e.target.value})}/>
			<button className="message-class__button" type="button" onClick={() => this.props.setText(this.state.textValue)}>Отправить</button>
		</div>;
	}
}