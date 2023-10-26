import React, {SelectHTMLAttributes} from 'react'
import './AtomicSelect.scss'


interface AtomicSelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  options:string[],
  onChange:()=>void
}

const AtomicSelect: React.FC<AtomicSelectProps> = ({ options,onChange,...rest }) => {
  return (
    <select {...rest} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>

      ))}
    </select>
  )
}

export default AtomicSelect