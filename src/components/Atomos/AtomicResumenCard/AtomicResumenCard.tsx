
import React from 'react'
import familia from '@images/ic_family.svg'
import { AtomicResumenCardProps } from '@types/types'
import { RESUMEN_TITLE, RESUMEN_SUBTITLE,RESUMEN_CELL,RESUMEN_PLAN,RESUMEN_COSTO_PLAN } from '@constants/constants'
import './AtomicResumenCard.scss'


const AtomicResumenCard: React.FC<AtomicResumenCardProps> = ({ dataclient }) => {

  return (
    <div className="atomic-resumencard">
      <div className="atomic-resumencard__content">
        <div className="atomic-resumencard__content--user">
          <span>{RESUMEN_TITLE}</span>
          <div className="atomic-resumencard__content--user-data">
            <img src={familia} />
            <p>{`${dataclient.name} ${dataclient.lastName}`}</p>
          </div>
        </div>
        <div className="atomic-resumencard__content--payment">
          <p>{RESUMEN_SUBTITLE}</p>
          <p>
            {dataclient.tipoDoc}: <span>{dataclient.nroDoc}</span>
          </p>
          <p>
            {RESUMEN_CELL} <span>{dataclient.nroCell}</span>
          </p>
        </div>
        <div className="atomic-resumencard__content--plan">
          <p>{RESUMEN_PLAN}</p>
          <p>{dataclient.plan}</p>
          <p>
            {RESUMEN_COSTO_PLAN}<span>{`$${dataclient.price}`}</span> al mes
          </p>
        </div>
      </div>
    </div>
  )
}

export default AtomicResumenCard