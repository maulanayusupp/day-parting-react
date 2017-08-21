import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styles from "./DayBlock.css"

/* Day Parting */
class DayParting extends Component {
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render () {
		var days = [];
		for (var i = 0; i < 7 ; i++) {
			days.push(<Day key={i}/>);
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
	  	this.state = {
	  		isDraggable: false,
	  	};
	  	this.dragging = this.dragging.bind(this);
	}

	dragging (isDrag = false) {
		this.setState({
	        isDraggable: isDrag
	    });
	}

	render () {
		var blocks = [];
		for (var i = 0; i < 24; i++) {
			blocks.push(
				<DayBlock
					key={i}
					dragging={this.dragging}
					isDraggable={this.state.isDraggable}
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
	}

	handleOnDrag () {
		console.log("on drag")
		return this.props.dragging(true);
	}

	handleOnDragOver () {
		console.log("on drag over")
		if (this.props.isDraggable) {
			this.setState({
		        isClicked: true
		    });
		}
	}

	handleDragEnter () {
		console.log("drag enter")
		return this.props.dragging(true);
	}

	handleDragEnd () {
		console.log("drag exit")
		return this.props.dragging(false);
	}

	handleClick () {
		console.log("click")
		var isClicked = this.state.isClicked ? false : true;
		this.setState({
	        isClicked: isClicked
	    });

	}

	render () {
		const isClicked = this.state.isClicked ? "DayBlock isClicked" : "DayBlock";
		return (
			<div
				className={isClicked}
				onDrag={this.handleOnDrag}
				onDragOver={this.handleOnDragOver}
				onClick={this.handleClick}
				onDragEnter={this.handleDragEnter}
				onDragEnd={this.handleDragEnd}
				>
			</div>
		)
	}
}


ReactDOM.render(
  <DayParting />,
  document.getElementById('dayparting')
);