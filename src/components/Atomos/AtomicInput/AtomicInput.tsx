import React, { ChangeEvent } from 'react'
import './AtomicInput.scss'

interface InputFormProps {
  label: string;
  value: number;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const AtomicInput: React.FC<InputFormProps> = ({ label, value, onChange }) => {

  return (
    <div className="atomicInput">
      <div className="atomicInput__form">
        <label>{label}</label>
        <input
          type="text"
          inputMode='numeric'
          pattern='[0-9]{0,9}'
          maxLength={9}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default AtomicInput