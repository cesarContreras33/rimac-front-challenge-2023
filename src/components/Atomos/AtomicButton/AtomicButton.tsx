import React from 'react'
import './AtomicButton.scss'

interface AtomicButtonProps{
  label:string;
  onClick:(e?) => void
}


const AtomicButton:React.FC<AtomicButtonProps> = ({label, onClick}) => {
  return (
    <button className="atomicButton" onClick={onClick}>
      {label}
    </button>
  )
}

export default AtomicButton