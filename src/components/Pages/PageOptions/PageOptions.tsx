
import {useState,useEffect} from 'react'
import AtomicBreadcrump from '../../Atomos/AtomicBreadcrump/AtomicBreadcrump'
import AtomicNavBtn from '../../Atomos/AtomicNavBtn/AtomicNavBtn'
import './PageOptions.scss'
import OrganismQuoter from '../../Organismos/OrganismQuoter/OrganismQuoter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlans } from '../../../api/apiPlans'
import { setPlans } from '../../../redux/slices/plansSlice'
import { AppState, ClientType } from '../../../types/types'


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

  const [discount, setDiscount] = useState(false)

  const dispatch = useDispatch()
  const plans = useSelector((state:AppState) => state.plans.list.list)


  useEffect(() => {
    const getInfo = async () => {
      const plans = await fetchPlans()
      dispatch(setPlans(plans))
    }
    getInfo()
  }, [])




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
    if(id===2){
      setDiscount(true)
    }else{
      setDiscount(false)
    }
  }


  return (
    <div className="pageoptions">
      <AtomicBreadcrump routes={routes} />
      <AtomicNavBtn />
      <OrganismQuoter
        optionPlans={optionPlans}
        handleClickCard={handleClickCard}
        plans={plans}
        discount={discount}
      />
    </div>
  )
}

export default PageOptions