import React, {Component} from 'react';
import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2017'
		};
		this.changeDeadline = this.changeDeadline.bind(this);
	}

	changeDeadline() {
		this.setState(() => {
			return {
				deadline: 'October 15, 1987'
			};
		});
	}

	render() {
		return (
			<div className="app">
				<div>
					<div className="app-title">Countdown to {this.state.deadline}</div>
					<div className="clock-days">14 days</div>
					<div className="clock-hours">12 hours</div>
					<div className="clock-minutes">15 minutes</div>
					<div className="clock-seconds">23 seconds</div>
				</div>
				<div>
					<input placeholder="new date here" />
					<button onClick={this.changeDeadline}>Submit</button>
				</div>
			</div>
    	);
	}
}

export default App;
