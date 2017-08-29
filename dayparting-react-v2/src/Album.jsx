import React from 'react'
import { createSelectable } from 'react-selectable-fast'
import Label from './Label.jsx'

const Album = ({ selectableRef, selected, selecting, title, year }) => (
  <div
    ref={selectableRef}
    className={`item ${selecting && 'selecting'} ${selected && 'selected'}`}
  >
    <div className="tick">+</div>
    <h2>{title}</h2>
    <small>{year}</small>
    <Label selected={selected} selecting={selecting} />
  </div>
)

export default createSelectable(Album)
