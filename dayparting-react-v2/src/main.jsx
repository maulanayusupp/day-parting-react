import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from "./DayBlock.css"
import daysData from './sample-data'

import { SelectableGroup } from 'react-selectable-fast'
import List from './List.jsx'

/* Day Parting */
class DayParting extends Component {
	constructor(props) {
	  	super(props);
	  	this.state = {
	  		selectedItems: [],
		    selectingItems: [],
		    tolerance: 0,
	  	};
	  	this.handleSelecting = this.handleSelecting.bind(this);
	  	this.handleSelectionFinish = this.handleSelectionFinish.bind(this);
	}

	handleSelecting (selectingItems) {
		this.setState({
			selectingItems: selectingItems
		})
	}

	handleSelectionFinish (selectedItems) {
		var dates = [];
		for (var i = 0; i < selectedItems.length; i++) {
			var selected = selectedItems[i];
			var date = {
				day: selected.props.day,
				name: selected.props.name,
				type: selected.props.type,
			}
			dates.push(date)
		}
		console.log(dates)
		this.setState({
			selectedItems: selectedItems,
			selectingItems: [],
		})
		console.log(`Finished selection ${selectedItems.length}`)
	}

	handleSelectionClear() {
		console.log('Cancel selection')
	}

	render () {
		const { selectedItems, selectingItems, tolerance, isGlobal } = this.state
		return (
			<div>
			  <p>
			    Selecting: <span className="counter">{selectingItems.length}</span>
			    <br />
			    Selected: <span className="counter">{selectedItems.length}</span>
			  </p>
			  <SelectableGroup
			    className="main"
			    clickClassName="tick"
			    enableDeselect
			    tolerance={tolerance}
			    globalMouse={isGlobal}
			    allowClickWithoutSelected={false}
			    duringSelection={this.handleSelecting}
			    onSelectionClear={this.handleSelectionClear}
			    onSelectionFinish={this.handleSelectionFinish}
			  >
			    <List days={daysData} />
			  </SelectableGroup>
			</div>
		)
	}
}


ReactDOM.render(
  <DayParting/>,
  document.getElementById('dayparting')
);