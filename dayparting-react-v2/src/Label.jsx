import React from 'react'

const Label = ({ selecting, selected }) => (
  <div className="album-label">
    Selecting: <span>{`${selecting}`}</span>
    <br />
    Selected: <span>{`${selected}`}</span>
  </div>
)

export default Label
