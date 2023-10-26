

//import React from 'react'
import AtomicTitle from '../../Atomos/AtomicTitle/AtomicTitle'
import AtomicResumenCard from '../../Atomos/AtomicResumenCard/AtomicResumenCard'

import './OrganismResumen.scss'
const OrganismResumen = () => {
  return (
    <div className="organismresumen">
      <div className="organismresumen__content">
        <div className="organismresumen__content--title">
          <AtomicTitle msg={'Resumen del seguro'} />
        </div>
        <div className="organismresumen__content--resumen">
            <AtomicResumenCard/>
        </div>
      </div>
    </div>
  ) 
}

export default OrganismResumen

