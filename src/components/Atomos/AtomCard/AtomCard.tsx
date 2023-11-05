import './AtomCard.scss'
import check from '@images/ic_check.svg'
import React from 'react'
import { AtomCardProps } from "@types/types.ts"


const AtomCard: React.FC<AtomCardProps> = ({
  icon,
  title,
  description,
  status,
  onClick
}) => {
  return (
    <div className={`atomcard ${status && 'active'}`} onClick={onClick}>
      <div className="atomcard__content">
        <div className="atomcard__content-check">
          <div className={`check ${status && 'active'}`}>
            <img src={check} />
          </div>
        </div>
        <div className="atomcard__content-icon">
          <img src={`/src/assets/images/${icon}.svg`} alt={icon} />
          <h2>{title}</h2>
        </div>
        <div className="atomcard__content-info">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default AtomCard