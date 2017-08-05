import React, { Component } from 'react';
import './app.css';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	getTimeUntil(deadline) {
		const time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((time/1000)%60);
		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor(time/(1000*60*60)%24);
		const days = Math.floor(time/(1000*60*60*24));
		this.setState(() => {
			return {
				days,
				hours,
				minutes,
				seconds
			}
		})
	}

	render() {
		this.getTimeUntil(this.props.deadline);
		const {days, hours, minutes, seconds } = this.state;
		return (
			<div>
				<div className="clock-days">{days} days</div>
				<div className="clock-hours">{hours} hours</div>
				<div className="clock-minutes">{minutes} minutes</div>
				<div className="clock-seconds">{seconds} seconds</div>
			</div>
		);
	}
}

export default Clock;
