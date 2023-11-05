import React from 'react'
import './AtomicSelect.scss'
import { AtomicSelectProps } from '@types/types'


const AtomicSelect: React.FC<AtomicSelectProps> = ({ options, onChange }) => {
  const onHandleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <select onChange={onHandleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default AtomicSelect