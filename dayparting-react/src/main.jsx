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
			isHolding: false,

			myDays:[
				{id:1, name: 'Monday'},
				{id:2, name: 'Tuesday'},
				{id:3, name: 'Wednesday'},
				{id:4, name: 'Thursday'},
				{id:5, name: 'Friday'},
				{id:6, name: 'Saturday'},
				{id:7, name: 'Sunday'},
			],

			actionBlocks: [
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
			],


	  	};
	  	this.handleIsClicking = this.handleIsClicking.bind(this);
	  	this.handleIsBlocking = this.handleIsBlocking.bind(this);
	  	this.handleIsHolding = this.handleIsHolding.bind(this);
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

	handleIsHolding (isHolding) {
		this.setState({
	        isHolding: isHolding
	    });
	}

	handleMouseLeave () {
		this.setState({
	        isBlocking: false,
	        isHolding: false,
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
					handleIsHolding = {this.handleIsHolding}
					isClicking = {this.state.isClicking}
					isBlocking = {this.state.isBlocking}
					isHolding = {this.state.isHolding}
				/>
			);
		}

		var myActionBlocks = this.state.actionBlocks;
		var actions = [];
		for (var i = 0; i < myActionBlocks.length; i++) {
			var action = myActionBlocks[i];
			actions.push(
				<ActionDayBlock
					key = {action.id}
				/>
			)
		}
		var actionsHead = [];
		for (var i = 0; i < myActionBlocks.length; i++) {
			var action = myActionBlocks[i];
			actionsHead.push(
				<ActionDayBlockHeader
					key = {action.id}
					action = {action}
				/>
			)
		}
		return (
			<div className="DayPartingWrapper">
				<div className="row">
					<div className="col-md-12">
						<div className = "DayPartingWrapper__Header">
							<div className="DayPartingWrapper__Title"> Dayparting</div>
							<div className="DayPartingWrapper__Content">Your campaign will be scheduled using the Asia/Jakarta timezone</div>
						</div>
					</div>
				</div>
				<div className="row ActionDayBlockWrapper ActionDayBlockWrapper--Header">
					<div className="col-md-2">
					</div>
					<div className="col-md-10">
						<div className="col-md-6 ActionDayBlockWrapper__type">AM</div>
						<div className="col-md-6 ActionDayBlockWrapper__type">PM</div>
						<div className = "ActionDayBlockWrapper__Header">
							{actionsHead}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div
							className = "DayParting"
							onMouseLeave = {this.handleMouseLeave} >
							 {days}
						</div>
					</div>
				</div>
				<div className="row ActionDayBlockWrapper">
					<div className="col-md-2">
					</div>
					<div className="col-md-10">
						<div className = "ActionDayBlockContainer">
							{actions}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

/* Action Day Block Header */
class ActionDayBlockHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render () {
		return (
			<div className="ActionDayBlock">
				<div className="ActionDayBlock--Header">
					{this.props.action.name}
				</div>
			</div>
		)
	}
}

/* Action Day Block Footer */
class ActionDayBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render () {
		return (
			<div className="ActionDayBlock">
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
					handleIsHolding = {this.props.handleIsHolding}
					isClicking = {this.props.isClicking}
					isBlocking = {this.props.isBlocking}
					isHolding = {this.props.isHolding}
				/>
			);
		}

		var day = this.props.day;
		return (
			<div className="row DayRow">
				<div className="col-md-2">
					<div className="DayType">
						{day.name}
					</div>
				</div>
				<div className="col-md-10">
					<div className="Day">
						{blocks}
					</div>
				</div>
			</div>
		)
	}
}

/* DayBlock */
class DayBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isClicked: false,
		};

		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
	}

	/* show value per block */
	showValue () {
		console.log('Day: ' + this.props.day.name);
		console.log('Time: ' + this.props.time.name);
		console.log('Type: ' + this.props.time.type);
	}

	/* mouse clicked */
	mouseClicked () {
		console.log("Blocking: " + this.props.isBlocking)
		var isIt = this.state.isClicked;
		var block = this.props.isBlocking;
		var holding = this.props.isHolding;
		if (holding) {
			if ((!block) && (!isIt)) {
				isIt = true;
			} else if ((!block) && (isIt)) {
				isIt = true;
			} else if ((block) && (isIt)) {
				isIt = false;
			}
		} else {
			isIt = this.state.isClicked ? false : true;
		}
		return isIt;
	}

	/* mouse down clicked */
	handleMouseDown (event) {
		event.preventDefault();
		var isIt = this.state.isClicked;
		this.props.handleIsBlocking(isIt);
		this.props.handleIsHolding(true);
		this.props.handleIsClicking(true);

		var isClicked = this.mouseClicked();
		this.clickBlock(isClicked);
	}

	/* mouse up */
	handleMouseUp () {
		this.props.handleIsClicking(false);
		this.props.handleIsBlocking(false);
		this.props.handleIsHolding(false);
	}

	/* mouse over block */
	handleMouseOver () {
		if (this.props.isClicking) {
			var isClicked = this.mouseClicked();
			this.clickBlock(isClicked);
		}
	}

	/* click block */
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