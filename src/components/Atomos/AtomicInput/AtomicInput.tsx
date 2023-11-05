import React, { useState } from 'react'
import './AtomicInput.scss'
import { InputFormProps } from '@types/types'



const AtomicInput: React.FC<InputFormProps> = ({ label,name, onValueChange}) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = async (e) => {
    const value = e.target.value
    const newValue = await value.replace(/[^0-9]/g,'')
    setInputValue(newValue)
    onValueChange(name, newValue)
  }
  

  return (
    <div className="atomicInput">
      <div className="atomicInput__form">
        <label>{label}</label>
        <input
          type="number"
          name={name}
          value={inputValue}
          onChange={onInputChange}
          className="mb-24"
        />
      </div>
    </div>
  )
}

export default AtomicInput