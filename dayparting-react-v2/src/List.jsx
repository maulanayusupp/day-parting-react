import React, { Component } from 'react'
import { SelectAll, DeselectAll } from 'react-selectable-fast'
import Item from './Item.jsx'

class List extends Component {
  constructor(props) {
      super(props);
      this.state = {
        actionBlocksheader: [
          {id:1, name: '12', type: 'AM', selected: false},
          {id:2, name: '01', type: 'AM', selected: false},
          {id:3, name: '02', type: 'AM', selected: false},
          {id:4, name: '03', type: 'AM', selected: false},
          {id:5, name: '04', type: 'AM', selected: false},
          {id:6, name: '05', type: 'AM', selected: false},
          {id:7, name: '06', type: 'AM', selected: false},
          {id:8, name: '07', type: 'AM', selected: false},
          {id:9, name: '08', type: 'AM', selected: false},
          {id:10, name: '09', type: 'AM', selected: false},
          {id:11, name: '10', type: 'AM', selected: false},
          {id:12, name: '11', type: 'AM', selected: false},
          {id:13, name: '12', type: 'PM', selected: false},
          {id:14, name: '01', type: 'PM', selected: false},
          {id:15, name: '02', type: 'PM', selected: false},
          {id:16, name: '03', type: 'PM', selected: false},
          {id:17, name: '04', type: 'PM', selected: false},
          {id:18, name: '05', type: 'PM', selected: false},
          {id:19, name: '06', type: 'PM', selected: false},
          {id:20, name: '07', type: 'PM', selected: false},
          {id:21, name: '08', type: 'PM', selected: false},
          {id:22, name: '09', type: 'PM', selected: false},
          {id:23, name: '10', type: 'PM', selected: false},
          {id:24, name: '11', type: 'PM', selected: false}
        ],
        actionBlocksFooter: [
          {id:1, name: '12', type: 'AM', selected: false},
          {id:2, name: '01', type: 'AM', selected: false},
          {id:3, name: '02', type: 'AM', selected: false},
          {id:4, name: '03', type: 'AM', selected: false},
          {id:5, name: '04', type: 'AM', selected: false},
          {id:6, name: '05', type: 'AM', selected: false},
          {id:7, name: '06', type: 'AM', selected: false},
          {id:8, name: '07', type: 'AM', selected: false},
          {id:9, name: '08', type: 'AM', selected: false},
          {id:10, name: '09', type: 'AM', selected: false},
          {id:11, name: '10', type: 'AM', selected: false},
          {id:12, name: '11', type: 'AM', selected: false},
          {id:13, name: '12', type: 'PM', selected: false},
          {id:14, name: '01', type: 'PM', selected: false},
          {id:15, name: '02', type: 'PM', selected: false},
          {id:16, name: '03', type: 'PM', selected: false},
          {id:17, name: '04', type: 'PM', selected: false},
          {id:18, name: '05', type: 'PM', selected: false},
          {id:19, name: '06', type: 'PM', selected: false},
          {id:20, name: '07', type: 'PM', selected: false},
          {id:21, name: '08', type: 'PM', selected: false},
          {id:22, name: '09', type: 'PM', selected: false},
          {id:23, name: '10', type: 'PM', selected: false},
          {id:24, name: '11', type: 'PM', selected: false}
        ],
        actionBlocksRight: [
          {id:1, name: 'monday', selected: false},
          {id:2, name: 'tuesday', selected: false},
          {id:3, name: 'wednesday', selected: false},
          {id:4, name: 'thursday', selected: false},
          {id:5, name: 'friday', selected: false},
          {id:6, name: 'saturday', selected: false},
          {id:7, name: 'sunday', selected: false},
        ],
      }
  }

  shouldComponentUpdate(nextProps) {
    console.log("New Props Selecting: " + this.props.selectingItems.length)
    console.log("New Props Selected: " + this.props.selectedItems.length)
    return nextProps.items !== this.props.items
  }

  render() {
    var days = this.props.days;
    var myDays = []
    for (var i = 0; i < days.length; i++) {
      var day = days[i];
      myDays.push(
        <Day
          key = {day.id}
          day = {day}
          items = {day.dates}
        />
      )
    }

    var myBlocksHeader = this.state.actionBlocksheader;
    var actionsHead = [];
    for (var i = 0; i < myBlocksHeader.length; i++) {
      var action = myBlocksHeader[i];
      actionsHead.push(
        <ActionDayBlockHeader
          key = {action.id}
          action = {action}
        />
      )
    }

    var myBlocksFooter = this.state.actionBlocksFooter;
    var actionsFooter = [];
    for (var i = 0; i < myBlocksFooter.length; i++) {
      var action = myBlocksFooter[i];
      actionsFooter.push(
        <ActionDayBlockFooter
          key = {action.id}
          action = {action}
        />
      )
    }

    var myBlocksRight = this.state.actionBlocksRight;
    var actionsRight = [];
    for (var i = 0; i < myBlocksRight.length; i++) {
      var action = myBlocksRight[i];
      actionsRight.push(
        <ActionDayBlockRight
          key = {action.id}
        />
      );
    }

    return (
      <div className = "dayPartingContainer">
        <div className = "not-selectable">Press ESC to clear selection</div>
        <div className = "row">
          <div className = "actionSelection">
            <SelectAll key="select-all-header" className = "selectable-button">
              <button className = "btn btn-primary">Select all</button>
            </SelectAll>
            <DeselectAll className = "selectable-button">
              <button className = "btn btn-danger">Clear selection</button>
            </DeselectAll>
          </div>
        </div>

        <div className = "dayPartingWrapper">
          <div className = "row">
            <div className = "col-lg-12">
              <div className = "dayPartingWrapper__Header">
                <div className = "dayPartingWrapper__Title"> Dayparting</div>
                <div className = "dayPartingWrapper__Content">Your campaign will be scheduled using the Asia/Jakarta timezone</div>
              </div>
            </div>
          </div>
          <div className = "row">
            <div className = "colTimeHeader">
            </div>
            <div className = "colTimeHeaderBlock">
              <div className = "labelActionTimeHeader">AM</div>
              <div className = "labelActionTimeHeader">PM</div>
              <div className = "actionHeaderBlockContainer">
                {actionsHead}
              </div>
            </div>
          </div>
          <div className = "row">
            <div className = "dayContainer">
              {myDays}
            </div>
            <div className = "dayRightContainer">
              <div className = "dayRightRowBlockContainer">
                {actionsRight}
              </div>
              <div className = "dayRightAllRowBlockContainer">
                <DeselectAll className = "dayRightAllRowBlock">
                  <div className = "labelRightEveryHour">
                      <div>Every Hour</div>
                  </div>
                </DeselectAll>
              </div>
            </div>
          </div>


          <div className = "row actionDayBlockFooterWrapper">
            <div className = "colTimeFooter">
            </div>
            <div className = "colTimeFooterBlock">
              <div className = "actionDayBlockFooterContainer">
                {actionsFooter}
              </div>
              <div className = "actionDayActionFooterContainer">
                <SelectAll className = "actionDayActionFooterBlock">
                  <div>Every Day</div>
                </SelectAll>
              </div>
            </div>
          </div>

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
      };
  }

  render () {
    var items = this.props.items;
    var day = this.props.day;
    var myItems = [];
    for (var i = 0; i < items.length ; i++) {
      var item = items[i];
      myItems.push(
        <Item
          key = {`${day.id}${i}`}
          day =  {day.name}
          name = {item.name}
          type = {item.type}
        />
      );
    }

    return (
      <div className = "row dayRow">
        <div className = "colDayLabel">
          <div className = "dayType">
            {day.name}
          </div>
        </div>
        <div className = "colBlock">
          <div className = "day">
            {myItems}
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
      <div className = "actionDayBlock">
        <div className = "actionDayBlock--Header">
          {this.props.action.name}
        </div>
      </div>
    )
  }
}

/* Action Day Block Footer */
class ActionDayBlockFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className = "actionDayBlock">
      </div>
    )
  }
}

/* Action Day Block Footer */
class ActionDayBlockRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <div className = "itemSidebar">
      </div>
    )
  }
}

export default List
