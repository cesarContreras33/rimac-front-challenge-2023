import React from 'react'
import './AtomicTitle.scss'

interface AtomicTitleProps{
  msg:string
}

const AtomicTitle: React.FC<AtomicTitleProps> = ({ msg }) => {
  return (
    <div className="atomicTitle">
      <h1>{msg}</h1>
    </div>

  )
}

export default AtomicTitle