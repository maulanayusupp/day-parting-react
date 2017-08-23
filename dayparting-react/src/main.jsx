import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from "./DayBlock.css"

/* Day Parting */
class DayParting extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
			isClicking: false,
	  	};
	  	this.handleIsClicking = this.handleIsClicking.bind(this);
	}

	handleIsClicking (isClick) {
		this.setState({
	        isClicking: isClick
	    });
	}

	render () {
		var days = [];
		for (var i = 0; i < 7 ; i++) {
			days.push(
				<Day
					key={i}
					handleIsClicking={this.handleIsClicking}
					isClicking={this.state.isClicking}
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
					isClicking={this.props.isClicking}
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

		this.handleOnDrag = this.handleOnDrag.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDragEnter = this.handleDragEnter.bind(this);
		this.handleDragEnd = this.handleDragEnd.bind(this);
		this.handleOnDragOver = this.handleOnDragOver.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleOnDrag () {
		console.log("on drag")
		return this.props.handleIsClicking(true);
	}

	handleOnDragOver () {
		console.log("on drag over")
		if (this.props.isClicking) {
			this.setState({
		        isClicked: true
		    });
		}
	}

	handleDragEnter () {
		console.log("drag enter")
		return this.props.handleIsClicking(true);
	}

	handleDragEnd () {
		console.log("drag exit")
		return this.props.handleIsClicking(false);
	}

	handleClick () {
		console.log("click")
		this.clickBlock();
	}

	handleMouseDown () {
		console.log("Mouse down")
		this.props.handleIsClicking(true);
		this.clickBlock();
	}

	handleMouseUp () {
		console.log("mouse up")
		return this.props.handleIsClicking(false);
	}

	handleMouseOut () {
		if (!this.props.isClicking) {
			console.log("mouse out")
			this.props.handleIsClicking(false);
		}
	}

	handleMouseOver () {
		console.log("mouse over")
		console.log(this.props.isClicking)
		// console.log(this.props.isClicking)
		if (this.props.isClicking) {
			console.log("mouse over down")
			this.clickBlock();
		}
	}

	clickBlock () {
		console.log("blok gan")
		var isClicked = this.state.isClicked ? false : true;
		this.setState({
	        isClicked: true
	    });
	}

	render () {
		const isClicked = this.state.isClicked ? "DayBlock isClicked" : "DayBlock";
		return (
			<div
				className={isClicked}
				// onDrag={this.handleOnDrag}
				// onDragOver={this.handleOnDragOver}
				// onClick={this.handleClick}
				// onDragEnter={this.handleDragEnter}
				onMouseDown={this.handleMouseDown}
				onMouseUp={this.handleMouseUp}
				onMouseOver={this.handleMouseOver}
				onMouseOut={this.handleMouseOut}
				// onDragEnd={this.handleDragEnd}
				>
			</div>
		)
	}
}


ReactDOM.render(
  <DayParting />,
  document.getElementById('dayparting')
);