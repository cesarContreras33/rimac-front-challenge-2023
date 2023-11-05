
import React from 'react'
import AtomicTitle from '@atoms/AtomicTitle/AtomicTitle'
import AtomicResumenCard from '@atoms/AtomicResumenCard/AtomicResumenCard'
import { OrganismResumenProps } from '@types/types'
import './OrganismResumen.scss'



const OrganismResumen: React.FC<OrganismResumenProps> = ({ dataclient }) => {
  return (
    <div className="organismresumen">
      <div className="organismresumen__content">
        <div className="organismresumen__content--title">
          <AtomicTitle msg={'Resumen del seguro'} />
        </div>
        <div className="organismresumen__content--resumen">
          <AtomicResumenCard dataclient={dataclient}/>
        </div>
      </div>
    </div>
  )
}

export default OrganismResumen

