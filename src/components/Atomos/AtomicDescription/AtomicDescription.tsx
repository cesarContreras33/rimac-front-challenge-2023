
import React from 'react'
import './AtomicDescription.scss'


interface AtomicDescriptionProps{
  msg:string
}


const AtomicDescription:React.FC<AtomicDescriptionProps> = ({msg}) => {
  return (
    <div className='atomicdescription'>
      <p>{msg}</p>
    </div>
  )
}

export default AtomicDescription