
import React from 'react'
import './AtomicDescription.scss'
import { AtomicDescriptionProps } from '../../../types/types'



const AtomicDescription:React.FC<AtomicDescriptionProps> = ({msg}) => {
  return (
    <div className='atomicdescription'>
      <p>{msg}</p>
    </div>
  )
}

export default AtomicDescription