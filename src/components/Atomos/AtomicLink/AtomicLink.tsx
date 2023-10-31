import React from 'react'
import './AtomicLink.scss'
import { atomicLinkProps } from '../../../types/types'



const AtomicLink: React.FC<atomicLinkProps> = ({ msg }) => {
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


