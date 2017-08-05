import React, {Component} from 'react';
import './app.css';
import Clock from './clock';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2017',
			newDeadline: ''
		};
		this.changeDeadline = this.changeDeadline.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
	}

	changeDeadline() {
		this.setState((prevState) => {
			return {
				deadline: prevState.newDeadline
			};
		});
	}

	handleDateChange(evt) {
		let newDeadline = evt.target.value;
		this.setState(() => {
			return {
				newDeadline: newDeadline
			};
		});
	}

	render() {
		return (
			<div className="app">
				<div>
					<div className="app-title">Countdown to {this.state.deadline}</div>
					<Clock deadline={this.state.deadline}/>
				</div>
				<div>
					<input
						placeholder="new date here"
						onChange={this.handleDateChange}
					/>
					<button onClick={this.changeDeadline}>Submit</button>
				</div>
			</div>
    	);
	}
}

export default App;
