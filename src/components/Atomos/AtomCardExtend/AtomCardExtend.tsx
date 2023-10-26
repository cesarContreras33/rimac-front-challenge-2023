//import React from 'react'
import './AtomCardExtend.scss'
import house from '../../../assets/images/IcHomeLight.svg'
import AtomicPill from '../AtomicPill/AtomicPill'
import AtomicButton from '../AtomicButton/AtomicButton'
import {useNavigate} from 'react-router-dom'


const AtomCardExtend = () => {
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
              <h2>Plan de casa</h2>
              <p className="plan">costo de plan</p>
              <p className="antes">39 antes</p>
              <p className="cost">$39 al mes</p>
            </div>
            <img src={house} alt="" />
          </div>
        </div>
        <div className="atomcard-extend__content--list">
          <ul className="plan-description">
            <li className="plan-description__item">
              <div className="plan-description__item-box">
                <p>
                  Médico general a domicilio por S/20 y medicinas cubiertas al
                  100%.
                </p>
              </div>
            </li>
            <li className="plan-description__item">
              <div className="plan-description__item-box">
                <p>
                  Videoconsulta y orientación telefónica al 100% en medicina
                  general + pediatría.
                </p>
              </div>
            </li>
            <li className="plan-description__item">
              <div className="plan-description__item-box">
                <p>
                  Indemnización de S/300 en caso de hospitalización por más de
                  un día.
                </p>
              </div>
            </li>
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