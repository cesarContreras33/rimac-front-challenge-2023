
import './AtomCardExtend.scss'
import AtomicPill from '@atoms/AtomicPill/AtomicPill'
import AtomicButton from '@atoms/AtomicButton/AtomicButton'
import React from 'react'
import { AtomCardExtendProps } from '@types/types'
import house from '@images/IcHomeLight.svg'
import {
  BUTTON_SELECTION_LABEL,
  OPTIONS_PILL_MSG,
  OPTIONS_PLAN_MSG
} from '@constants/constants'


const AtomCardExtend: React.FC<AtomCardExtendProps> = ({
  name,
  price,
  description,
  discount,
  handleSelectPlan,
  id
}) => {


  return (
    <div className="atomcard-extend">
      <div className="atomcard-extend__content">
        <div className="atomcard-extend__content--top">
          <div className="atomcard-extend__content--header">
            <div className="atomcard-extend__content--header-pill">
              <AtomicPill message={OPTIONS_PILL_MSG} />
            </div>
            <div className="atomcard-extend__content--header-title">
              <div className="atomcard-extend__content--header-price">
                <h2>{name}</h2>
                <p className="plan">{OPTIONS_PLAN_MSG}</p>
                <p className="antes">{discount && `${price} descuento`}</p>
                <p className="cost">{`$${
                  discount ? `${price * 0.95}` : price
                } al mes`}</p>
              </div>
              <img src={house} alt="" />
            </div>
          </div>
          <div className="atomcard-extend__content--list">
            <ul className="plan-description">
              {description && description.map((descrip, index) => {
                return (
                  <li key={index} className="plan-description__item">
                    <div className="plan-description__item-box">
                      <p>{descrip}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="atomcard-extend__content--button">
          <AtomicButton
            label={BUTTON_SELECTION_LABEL}
            onClick={() => handleSelectPlan(id, discount)}
          />
        </div>
      </div>
    </div>
  )
}

export default AtomCardExtend