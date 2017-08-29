import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from "./DayBlock.css"
import data from './sample-data'

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
		console.log(selectedItems)
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
			    <List items={data} />
			  </SelectableGroup>
			</div>
		)
	}
}


ReactDOM.render(
  <DayParting/>,
  document.getElementById('dayparting')
);