import React, { useState, ChangeEvent } from 'react'
import './AtomicInput.scss'


interface InputForm {
  label: string
  value: string
  onChange: (value: string) => void
}

const AtomInput: React.FC<InputForm> = ({ label, value, onChange }) => {
  const [focused, setFocused] = useState(false)
  const [docNumber, setDocNumber] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDocNumber(event.target.value)

  }


  const handleFocus = () => setFocused(true)

  const handleBlur = () => setFocused(false)

  return (
    <div className={`inputmaterial ${focused && 'focused'}`}>
      <label>{label}</label>
      <input
        type="text"
        value={docNumber}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default AtomInput