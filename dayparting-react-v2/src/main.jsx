import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from "./DayBlock.css"
// import daysData from './sample-data'

import { SelectableGroup, S } from 'react-selectable-fast'
import List from './List.jsx'

import { observer, inject, Provider } from "mobx-react"
import dayPartingStore from './DayPartingStore.jsx'

/* Day Parting */
class DayPartingContainer extends Component {
	render() {
		return (
			<Provider store={dayPartingStore}>
				<DayParting />
			</Provider>
		)
	}
}

@inject("store") @observer
class DayParting extends Component {
	constructor(props) {
	  	super(props);
	  	this.handleSelecting = this.handleSelecting.bind(this);
	  	this.handleSelectionFinish = this.handleSelectionFinish.bind(this);
	}

	handleSelecting (selectingItems) {
		this.props.store.onSelectingItems(selectingItems);
	}

	handleSelectionFinish (selectedItems) {
		/*var dates = [];
		for (var i = 0; i < selectedItems.length; i++) {
			var selected = selectedItems[i];
			var date = {
				day: selected.props.day,
				name: selected.props.name,
				type: selected.props.type,
				state: selected.state,
			}
			dates.push(date)
		}*/
		this.props.store.onSelectedItems(selectedItems);
		this.props.store.onSelectingItems([]);
		console.log(`Finished selection ${this.props.store.selectedItems.length}`)
	}

	handleSelectionClear() {
		console.log('Cancel selection')
	}

	render () {
		const { selectedItems, selectingItems } = this.props.store
		return (
			<div className="row">
			  	<div className="col-lg-1">
			    	Selecting: <span className="counter">{selectingItems.length}</span>
			  	</div>

			  	<div className="col-lg-1">
			    	Selected: <span className="counter">{selectedItems.length}</span>
			    </div>

			    <div className="col-lg-10">
				  	<SelectableGroup
					    className="main"
					    clickClassName="tick"
					    enableDeselect
					    tolerance={0}
					    globalMouse={false}
					    allowClickWithoutSelected={false}
					    duringSelection={this.handleSelecting}
					    onSelectionClear={this.handleSelectionClear}
					    onSelectionFinish={this.handleSelectionFinish}>
				    	<List
				    		selectedItems = {this.props.store.selectedItems}
				    		selectingItems = {this.props.store.selectingItems}
				    	/>
				  	</SelectableGroup>
				  </div>
			</div>
		)
	}
}

ReactDOM.render(
  <DayPartingContainer/>,
  document.getElementById('dayparting')
);