import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from "./DayBlock.css"

/* Day Parting */
class DayParting extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
			isClicking: false,
			isBlocking: false,

			myDays:[
				{id:1, name: 'Monday'},
				{id:2, name: 'Tuesday'},
				{id:3, name: 'Wednesday'},
				{id:4, name: 'Thursday'},
				{id:5, name: 'Friday'},
				{id:6, name: 'Saturday'},
				{id:7, name: 'Sunday'},
			]
	  	};
	  	this.handleIsClicking = this.handleIsClicking.bind(this);
	  	this.handleIsBlocking = this.handleIsBlocking.bind(this);
	  	this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleIsClicking (isClick) {
		this.setState({
	        isClicking: isClick
	    });
	}

	handleIsBlocking (isBlock) {
		this.setState({
	        isBlocking: isBlock
	    });
	}

	handleMouseLeave () {
		this.setState({
	        isBlocking: false,
	        isClicking: false
	    });
	}

	render () {
		var myDays = this.state.myDays;
		var days = [];
		for (var i = 0; i < myDays.length ; i++) {
			var day = myDays[i];
			days.push(
				<Day
					key = {day.id}
					day = {day}
					handleIsClicking = {this.handleIsClicking}
					handleIsBlocking = {this.handleIsBlocking}
					isClicking = {this.state.isClicking}
					isBlocking = {this.state.isBlocking}
				/>
			);
		}
		return (
			<div className="DayPartingWrapper">
				<div
					className = "DayParting"
					onMouseLeave = {this.handleMouseLeave}
				>
					 {days}
				</div>
			</div>
		)
	}
}

/* Day */
class Day extends Component {
	constructor(props) {
		super(props);
	  	this.state = {
	  		myTimes: [
	  			{id:1, name: '12', type: 'AM'},
	  			{id:2, name: '01', type: 'AM'},
	  			{id:3, name: '02', type: 'AM'},
	  			{id:4, name: '03', type: 'AM'},
	  			{id:5, name: '04', type: 'AM'},
	  			{id:6, name: '05', type: 'AM'},
	  			{id:7, name: '06', type: 'AM'},
	  			{id:8, name: '07', type: 'AM'},
	  			{id:9, name: '08', type: 'AM'},
	  			{id:10, name: '09', type: 'AM'},
	  			{id:11, name: '10', type: 'AM'},
	  			{id:12, name: '11', type: 'AM'},
	  			{id:13, name: '12', type: 'PM'},
	  			{id:14, name: '01', type: 'PM'},
	  			{id:15, name: '02', type: 'PM'},
	  			{id:16, name: '03', type: 'PM'},
	  			{id:17, name: '04', type: 'PM'},
	  			{id:18, name: '05', type: 'PM'},
	  			{id:19, name: '06', type: 'PM'},
	  			{id:20, name: '07', type: 'PM'},
	  			{id:21, name: '08', type: 'PM'},
	  			{id:22, name: '09', type: 'PM'},
	  			{id:23, name: '10', type: 'PM'},
	  			{id:24, name: '11', type: 'PM'}
	  		]
	  	};
	}

	render () {
		var times = this.state.myTimes;
		var blocks = [];
		for (var i = 0; i < times.length ; i++) {
			var time = times[i];
			blocks.push(
				<DayBlock
					key = {time.id}
					time = {time}
					day = {this.props.day}
					handleIsClicking = {this.props.handleIsClicking}
					handleIsBlocking = {this.props.handleIsBlocking}
					isClicking = {this.props.isClicking}
					isBlocking = {this.props.isBlocking}
				/>
			);
		}
		return (
			<div className="Day">
				{blocks}
			</div>
		)
	}
}

/* DayBlock */
class DayBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClicked: '',
		};

		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
	}

	/* mouse */
	mouseClicked () {
		var isIt = true
		if (!this.props.isBlocking) {
			isIt = this.state.isClicked ? false : true;
		}
		return isIt
	}
	handleMouseDown (event) {
		event.preventDefault();
		var isClicked = this.mouseClicked();
		// var isClicked = this.state.isClicked ? false : true;

		this.props.handleIsBlocking(isClicked);

		console.log('Day: ' + this.props.day.name);
		console.log('Time: ' + this.props.time.name);
		console.log('Type: ' + this.props.time.type);

		/* clicking parent */
		this.props.handleIsClicking(true);
		this.clickBlock(isClicked);
	}
	handleMouseUp () {
		return this.props.handleIsClicking(false);
	}
	handleMouseOver () {
		if (this.props.isClicking) {
			var isClicked = this.mouseClicked();
			this.clickBlock(isClicked);
			console.log('Day: ' + this.props.day.name);
			console.log('Time: ' + this.props.time.name);
			console.log('Type: ' + this.props.time.type);
		}
	}
	clickBlock (isClicked) {
		this.setState({
	        isClicked: isClicked
	    });
	}

	render () {
		const isClicked = this.state.isClicked ? "DayBlock isClicked" : "DayBlock";
		return (
			<div
				className={isClicked}
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}
				onMouseOver={this.handleMouseOver}
				>
			</div>
		)
	}
}

ReactDOM.render(
  <DayParting />,
  document.getElementById('dayparting')
);