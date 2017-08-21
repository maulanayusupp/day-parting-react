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
			isHovered: '',
		};

		this.handleHover = this.handleHover.bind(this);
		this.handleLeaveHover = this.handleLeaveHover.bind(this);
		this.handleOnDrag = this.handleOnDrag.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDragEnter = this.handleDragEnter.bind(this);
		this.handleDragEnd = this.handleDragEnd.bind(this);
	}

	handleHover () {
		console.log(this.props.isDraggable)
		if (this.props.isDraggable) {
			this.setState({
		        isHovered: true
		    });
		}
	}

	handleOnDrag () {
		console.log(this.props.isDraggable)
		return this.props.dragging(true);
	}

	handleLeaveHover () {
		return this.props.dragging(false);
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
		this.setState({
	        isHovered: true
	    });
	}

	render () {
		const isHover = this.state.isHovered ? "DayBlock isHover" : "DayBlock";
		return (
			<div
				className={isHover}
				// onDrag={this.handleOnDrag}
				onMouseEnter={this.handleHover}
				onMouseLeave={this.handleLeaveHover}
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