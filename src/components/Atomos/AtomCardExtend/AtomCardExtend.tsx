//import React from 'react'
import './AtomCardExtend.scss'
import house from '../../../assets/images/IcHomeLight.svg'
import AtomicPill from '../AtomicPill/AtomicPill'
import AtomicButton from '../AtomicButton/AtomicButton'
import {useNavigate} from 'react-router-dom'
import React from 'react'


interface AtomCardExtendProps {
  name?: string
  price?: number
  description?: string[]
  age?: number
  discount?:boolean
}


const AtomCardExtend: React.FC<AtomCardExtendProps> = ({ name,price,description,discount }) => {
  const navigator = useNavigate()

  const onHandleClickNext = () => {
    navigator('/resumen')
  }

  return (
    <div className="atomcard-extend">
      <div className="atomcard-extend__content">
        <div className="atomcard-extend__content--header">
          <div className="atomcard-extend__content--header-pill">
            <AtomicPill message={'plan recomendado'} />
          </div>
          <div className="atomcard-extend__content--header-title">
            <div className="atomcard-extend__content--header-price">
              <h2>{name}</h2>
              <p className="plan">costo de plan</p>
              <p className="antes">{discount && `${price*0.95} descuento`}</p>
              <p className="cost">{`$${price} al mes`}</p>
            </div>
            <img src={house} alt="" />
          </div>
        </div>
        <div className="atomcard-extend__content--list">
          <ul className="plan-description">
            {description.map((descrip, index) => {
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
        <div className="atomcard-extend__content--button">
          <AtomicButton
            label={'Seleccionar Plan'}
            onClick={onHandleClickNext}
          />
        </div>
      </div>
    </div>
  )
}

export default AtomCardExtend