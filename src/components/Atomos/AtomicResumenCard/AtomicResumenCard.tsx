
import React from 'react'
import familia from '@images/ic_family.svg'
import { AtomicResumenCardProps } from '@types/types'
import './AtomicResumenCard.scss'


const AtomicResumenCard: React.FC<AtomicResumenCardProps> = ({ dataclient }) => {

  return (
    <div className="atomic-resumencard">
      <div className="atomic-resumencard__content">
        <div className="atomic-resumencard__content--user">
          <span>Precios calculados para:</span>
          <div className="atomic-resumencard__content--user-data">
            <img src={familia} />
            <p>{`${dataclient.name} ${dataclient.lastName}`}</p>
          </div>
        </div>
        <div className="atomic-resumencard__content--payment">
          <p>Responsable de pago</p>
          <p>
            {dataclient.tipoDoc}: <span>{dataclient.nroDoc}</span>
          </p>
          <p>
            Celular: <span>{dataclient.nroCell}</span>
          </p>
        </div>
        <div className="atomic-resumencard__content--plan">
          <p>Plan elegido</p>
          <p>{dataclient.plan}</p>
          <p>
            Costo del Plan: <span>{`$${dataclient.price}`}</span> al mes
          </p>
        </div>
      </div>
    </div>
  )
}

export default AtomicResumenCard