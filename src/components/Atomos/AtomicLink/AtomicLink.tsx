import React from 'react'
import './AtomicLink.scss'

interface atomicLinkProp{
  msg:string
}

const AtomicLink: React.FC<atomicLinkProp> = ({ msg }) => {
  return(
    <div className="atomiclink">
      <p>
        <a href="#">
          {msg}
        </a>
      </p>
    </div>
  )
  
}

export default AtomicLink


