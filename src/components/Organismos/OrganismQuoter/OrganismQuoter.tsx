import React from 'react'
import AtomicTitle from '../../Atomos/AtomicTitle/AtomicTitle'
import AtomicDescription from '../../Atomos/AtomicDescription/AtomicDescription'
import './OrganismQuoter.scss'
import AtomCard from '../../Atomos/AtomCard/AtomCard'
import AtomCardExtend from '../../Atomos/AtomCardExtend/AtomCardExtend'
import { ClientType } from '../../../types/types'
import { useSelector } from 'react-redux'

//redux


interface OrganismCuoterProps {
  optionPlans: Plan[]
  handleClickCard: (id: number) => void
  plans: ClientType[]
  discount: boolean
  handleSelectPlan: (id:string) => void
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
  handleClickCard,
  plans,
  discount,
  handleSelectPlan
}) => {
  const client = useSelector((state: any) => state.client.client)

  const optionsSelected = optionPlans.some((plan) => plan.status)

  return (
    <div className="organismquoter">
      <div className="organismquoter__content">
        <div className="organismquoter__content--title">
          <div className="organismquoter__content--title-center">
            <AtomicTitle msg={`${client.name} ¿Para quién deseas cotizar?`} />
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
            className={`organismquoter__content-group--options ${
              optionsSelected ? 'show' : 'hide'
            }`}
          >
            <div className="organismquoter__content-group--options-content">
              {plans &&
                plans.map((plan, index) => {
                  return (
                    <AtomCardExtend
                      key={index}
                      {...plan}
                      discount={discount}
                      handleSelectPlan={handleSelectPlan}
                      id={plan.name}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganismQuoter







