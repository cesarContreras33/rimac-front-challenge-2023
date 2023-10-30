import React from 'react'
import './AtomicButton.scss'

interface AtomicButtonProps{
  label:string;
  onClick:(e) => void
  disabled?:boolean
}


const AtomicButton:React.FC<AtomicButtonProps> = ({label, onClick,disabled}) => {
  return (
    <button className="atomicButton" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}

export default AtomicButton