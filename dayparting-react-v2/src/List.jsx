import React, { Component } from 'react'
import { SelectAll, DeselectAll } from 'react-selectable-fast'
import Item from './Item.jsx'

class List extends Component {
  constructor(props) {
      super(props);
      this.state = {
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
      }
  }
  shouldComponentUpdate(nextProps) {
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

    var myActionBlocks = this.state.actionBlocks;
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
      <div className="dayPartingContainer">
        <div className="not-selectable">Press ESC to clear selection</div>
        <div className="row">
          <div className="actionSelection">
            <SelectAll className="selectable-button">
              <button className="btn btn-primary">Select all</button>
            </SelectAll>
            <DeselectAll className="selectable-button">
              <button className="btn btn-danger">Clear selection</button>
            </DeselectAll>
          </div>
        </div>

        <div className="DayPartingWrapper">
          <div className="row">
            <div className="col-lg-12">
              <div className = "DayPartingWrapper__Header">
                <div className="DayPartingWrapper__Title"> Dayparting</div>
                <div className="DayPartingWrapper__Content">Your campaign will be scheduled using the Asia/Jakarta timezone</div>
              </div>
            </div>
          </div>
          <div className="row ActionDayBlockWrapper ActionDayBlockWrapper--Header">
            <div className="col-lg-2">
            </div>
            <div className="col-lg-10">
              <div className="col-lg-6 ActionDayBlockWrapper__type">AM</div>
              <div className="col-lg-6 ActionDayBlockWrapper__type">PM</div>
              <div className = "ActionDayBlockWrapper__Header">
                {actionsHead}
              </div>
            </div>
          </div>
          {myDays}
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
      <div className="row DayRow">
        <div className="col-lg-2">
          <div className="DayType">
            {day.name}
          </div>
        </div>
        <div className="col-lg-10">
          <div className="Day">
            {myItems}
          </div>
        </div>
      </div>
    )
  }
}
export default List
