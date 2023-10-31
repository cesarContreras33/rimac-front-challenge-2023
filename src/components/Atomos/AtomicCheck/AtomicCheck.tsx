import React, { useState } from 'react'
import './AtomicCheck.scss'
import { AtomicCheckProps } from '../../../types/types'



const AtomicCheck: React.FC<AtomicCheckProps> = ({
  label,
  name,
  handleChecked
}) => {
  const [checked, setChecked] = useState(false)
  const toggleCheckbox = () => {
    const currentChecked = !checked
    setChecked(currentChecked)
    handleChecked(name, currentChecked)
  }

  return (
    <label className={`mt-24 atomiccheck ${checked ? 'checked' : ''}`}>
      <input type="checkbox" checked={checked} onChange={toggleCheckbox} />
      <span className="checkmark"></span>
      {label}
    </label>
  )
}

export default AtomicCheck

