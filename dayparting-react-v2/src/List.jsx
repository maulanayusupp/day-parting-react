import React, { Component } from 'react'
import { SelectAll, DeselectAll } from 'react-selectable-fast'
import SelectableAlbum from './Album.jsx'

class List extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.items !== this.props.items
  }

  render() {
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
          {this.props.items.map((item, i) => (
            <SelectableAlbum
              key={`${item.title}${i}`}
              title={item.title}
              year={item.year}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default List
