import React, { Component } from 'react'
import { SelectAll, DeselectAll } from 'react-selectable-fast'
import Item from './Item.jsx'

class List extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.items !== this.props.items
  }

  render() {
    var days = this.props.days;
    var myDates = [];
    for (var i = 0; i < days.length; i++) {
      var day = days[i];
      for (var j = 0; j < day.dates.length; j++) {
        var date = day.dates[j];
        myDates.push(
          <Item
            key ={`${date.id}${i}`}
            day =  {day.day}
            name = {date.name}
            type = {date.type}
          />
        );
      }
    }
    return (
      <div>
        <p className="not-selectable">Press ESC to clear selection</p>
        <div>
          <SelectAll className="selectable-button">
            <button>Select all</button>
          </SelectAll>
          <DeselectAll className="selectable-button">
            <button>Clear selection</button>
          </DeselectAll>
        </div>
        <div className="albums">
          {myDates}
        </div>
      </div>
    )
  }
}

export default List
