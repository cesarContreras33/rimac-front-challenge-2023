//import React from 'react'

import './AtomicResumenCard.scss'
import familia from '../../../assets/images/ic_family.svg'


const AtomicResumenCard = () => {
  return (
    <div className="atomic-resumencard">
      <div className="atomic-resumencard__content">
        <div className="atomic-resumencard__content--user">
          <span>Precios calculados para:</span>
          <div className="atomic-resumencard__content--user-data">
            <img src={familia}/>
            <p>Rocio Miranda Díaz</p>
          </div>
        </div>
        <div className="atomic-resumencard__content--payment">
          <p>Responsable de pago</p>
          <p>DNI: <span>44491327</span></p>
          <p>Celular: <span>984556599</span></p>
        </div>
        <div className="atomic-resumencard__content--plan">
          <p>Plan elegido</p>
          <p>Plan en Casa y Clínica</p>
          <p>Costo del Plan: <span>$99</span> al mes</p>
        </div>
      </div>
    </div>
  )
}

export default AtomicResumenCard