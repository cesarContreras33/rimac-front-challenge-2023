import React from 'react'
import './AtomicButton.scss'
import { AtomicButtonProps } from '../../../types/types'




const AtomicButton:React.FC<AtomicButtonProps> = ({label, onClick,disabled}) => {
  return (
    <button className="atomicButton" onClick={onClick} disabled={disabled}>
      {label}
    </button>
  )
}

export default AtomicButton