import React, { useState } from 'react'
import './AtomicCheck.scss'

const BlackCheckbox = ({ label }) => {
  const [checked, setChecked] = useState(false)

  const toggleCheckbox = () => {
    setChecked(!checked)
  }

  return (
    <label className={`mt-24 black-checkbox ${checked ? 'checked' : ''}`}>
      <input type="checkbox" checked={checked} onChange={toggleCheckbox} />
      <span className="checkmark"></span>
      {label}
    </label>
  )
}

export default BlackCheckbox

