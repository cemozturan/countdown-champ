import React, {Component} from 'react';
import './app.css';
import Clock from './clock';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline: 'December 25, 2017',
			newDeadline: ''
		};
		this.changeDeadline = this.changeDeadline.bind(this);
		this.handleChangeDeadline = this.handleChangeDeadline.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
	}

	changeDeadline() {
		this.setState((prevState) => {
			return {
				deadline: prevState.newDeadline,
				newDeadline: ''
			};
		});
	}

	handleChangeDeadline(evt) {
		evt.preventDefault();
		this.changeDeadline();
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
				<Form inline onSubmit={this.handleChangeDeadline}>
					<FormControl
						className="deadline-input"
						placeholder="new date here"
						onChange={this.handleDateChange}
						value={this.state.newDeadline}
					/>
					<Button onClick={this.changeDeadline}>Submit</Button>
				</Form>
			</div>
    	);
	}
}

export default App;
