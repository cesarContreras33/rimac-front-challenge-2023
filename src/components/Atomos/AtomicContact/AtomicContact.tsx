
import React from 'react'
import './AtomicContact.scss'


interface AtomicContactProps{
  msg:string
  imgurl:string
  tlf:string
}


const AtomicContact:React.FC<AtomicContactProps> = ({msg,imgurl,tlf}) => {
  return (
    <div className="atomicContact">
      <p>{msg}</p>
      <div className="atomicContact__phone">
        <img src={imgurl}/>
        <p>{tlf}</p>
      </div>
    </div>
  )
}

export default AtomicContact


