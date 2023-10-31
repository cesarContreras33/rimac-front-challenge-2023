import React from 'react'
import './AtomicPill.scss'
import { AtomicPillProps } from '../../../types/types'


const AtomicPill: React.FC<AtomicPillProps> = ({ message }) => {
  return (
    <div className="atomicPill">
      <p>{message}</p>
    </div>
  )
}

export default AtomicPill

