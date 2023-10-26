import React from 'react'
import './AtomicPill.scss'

interface AtomicPillProps {
  message: string
}

const AtomicPill: React.FC<AtomicPillProps> = ({ message }) => {
  return (
    <div className="atomicPill">
      <p>{message}</p>
    </div>
  )
}

export default AtomicPill

