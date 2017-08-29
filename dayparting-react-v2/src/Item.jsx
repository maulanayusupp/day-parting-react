import React from 'react'
import { createSelectable } from 'react-selectable-fast'

const Item = ({ selectableRef, selected, selecting, title, year }) => (
  <div
    ref={selectableRef}
    className={`item ${selecting && 'selecting'} ${selected && 'selected'}`}
  >
  </div>
)

export default createSelectable(Item)
