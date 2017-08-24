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
	  	};
	  	this.handleIsClicking = this.handleIsClicking.bind(this);
	  	this.handleIsBlocking = this.handleIsBlocking.bind(this);
	}

	handleIsClicking (isClick) {
		this.setState({
	        isClicking: isClick
	    });
	}

	handleIsBlocking (isBlock) {
		console.log(isBlock)
		this.setState({
	        isBlocking: isBlock
	    });
	}

	render () {
		var days = [];
		for (var i = 0; i < 7 ; i++) {
			days.push(
				<Day
					key={i}
					handleIsClicking={this.handleIsClicking}
					handleIsBlocking={this.handleIsBlocking}
					isClicking={this.state.isClicking}
					isBlocking={this.state.isBlocking}
				/>
			);
		}
		return (
			<div className="DayPartingWrapper">
				<div className="DayParting">
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
	  	this.state = {};
	}

	render () {
		var blocks = [];
		for (var i = 0; i < 24; i++) {
			blocks.push(
				<DayBlock
					key={i}
					handleIsClicking={this.props.handleIsClicking}
					handleIsBlocking={this.props.handleIsBlocking}
					isClicking={this.props.isClicking}
					isBlocking={this.props.isBlocking}
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
		this.handleClicking = this.handleClicking.bind(this);
	}

	handleClicking (isClicked) {
		return this.props.handleIsBlocking(isClicked);
	}
	/* mouse */
	handleMouseDown (event) {
		event.preventDefault();
		var isClicked = this.state.isClicked ? false : true;
		this.handleClicking(isClicked);

		/* clicking parent */
		this.props.handleIsClicking(true);
		this.clickBlock();
	}
	handleMouseUp () {
		return this.props.handleIsClicking(false);
	}
	handleMouseOver () {
		if (this.props.isClicking) {
			this.clickBlock();
		}
	}
	clickBlock () {
		this.setState({
	        isClicked: this.props.isBlocking
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