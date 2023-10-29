import React, {SelectHTMLAttributes} from 'react'
import './AtomicSelect.scss'


interface AtomicSelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  options:string[],
  onChange?:(e:React.ChangeEvent<HTMLSelectElement>)=>void
}

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