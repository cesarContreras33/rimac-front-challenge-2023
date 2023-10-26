
import {useState} from 'react'
import AtomicBreadcrump from '../../Atomos/AtomicBreadcrump/AtomicBreadcrump'
import AtomicNavBtn from '../../Atomos/AtomicNavBtn/AtomicNavBtn'
import './PageOptions.scss'
import OrganismQuoter from '../../Organismos/OrganismQuoter/OrganismQuoter'

const PageOptions = () => {

  const [routes] = useState([
    { label: 'Planes y Cobertura', num:'1', status: true },
    { label: 'Resumen',num:'2', status: false }
  ])

  const [optionPlans,setOptionPlans] = useState([
    {
      id: 1,
      icon: 'IcProtectionLight',
      title: 'Para mí',
      description:
        'Cotiza tu seguro de salud y agrega familiares si así lo deseas.',
      status: false
    },
    {
      id: 2,
      icon: 'IcAddUserLight',
      title: 'Para alguien más',
      description:
        'Realiza una cotización para uno de tus familiares o cualquier persona.',
      status: false
    }
  ])
  const handleClickCard = (id: number) => {
    const update = optionPlans.map(option=>{
      if(option.id === id){
        if(!option.status){
          return {...option,status:true}
        }
        return option
      }else{
        return {...option,status:false}
      }
    })
    setOptionPlans(update)
  }


  return (
    <div className="pageoptions">
      <AtomicBreadcrump routes={routes} />
      <AtomicNavBtn />
      <OrganismQuoter
        optionPlans={optionPlans}
        handleClickCard={handleClickCard}
      />
    </div>
  )
}

export default PageOptions