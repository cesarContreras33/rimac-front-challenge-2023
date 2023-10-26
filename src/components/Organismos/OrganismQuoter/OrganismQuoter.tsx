import React, { useState,useEffect } from 'react'
import AtomicTitle from '../../Atomos/AtomicTitle/AtomicTitle'
import AtomicDescription from '../../Atomos/AtomicDescription/AtomicDescription'
import './OrganismQuoter.scss'
import AtomCard from '../../Atomos/AtomCard/AtomCard'
import AtomCardExtend from '../../Atomos/AtomCardExtend/AtomCardExtend'

//redux


interface OrganismCuoterProps {
  optionPlans: Plan[];
  handleClickCard:(id:number) => void;
}

interface Plan {
  id: number
  icon: string
  title: string
  description: string
  status: boolean
}


const OrganismQuoter: React.FC<OrganismCuoterProps> = ({
  optionPlans,
  handleClickCard
}) => {


  const optionsSelected = optionPlans.some(plan => plan.status)
  
  return (
    <div className="organismquoter">
      <div className="organismquoter__content">
        <div className="organismquoter__content--title">
          <div className="organismquoter__content--title-center">
            <AtomicTitle msg={'Rocío ¿Para quién deseas cotizar?'} />
            <AtomicDescription
              msg={'Selecciona la opción que se ajuste más a tus necesidades.'}
            />
          </div>
        </div>
        <div className="organismquoter__content-group">
          <div className="organismquoter__content-group--select">
            {optionPlans &&
              optionPlans.map((plan) => (
                <AtomCard
                  key={plan.id}
                  {...plan}
                  onClick={() => handleClickCard(plan.id)}
                />
              ))}
          </div>
          <div
            className={`organismquoter__content-group--options ${optionsSelected ? 'show':'hide'}`}
          >
            <div className="organismquoter__content-group--options-content">
              <AtomCardExtend />
              <AtomCardExtend />
              <AtomCardExtend />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganismQuoter







