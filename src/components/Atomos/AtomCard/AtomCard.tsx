//import React from 'react'

import './AtomCard.scss'
import check from '../../../assets/images/ic_check.svg'
import React from 'react'

interface AtomCardProps{
  id?:number
  icon:string,
  title:string,
  description:string,
  status?:boolean,
  onClick:() => void  
}

const AtomCard:React.FC<AtomCardProps> = ({icon,title,description,status,onClick}) => {
  return (
    <div className="atomcard" onClick={onClick}>
      <div className="atomcard__content">
        <div className="atomcard__content-check">
          <div className={`check ${status && 'active'}`}>
            <img src={check} />
          </div>
        </div>
        <div className="atomcard__content-icon">
          <img src={`/src/assets/images/${icon}.svg`} alt="" />
        </div>
        <div className="atomcard__content-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default AtomCard