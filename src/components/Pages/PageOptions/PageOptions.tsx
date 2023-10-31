
import {useState,useEffect} from 'react'
import AtomicBreadcrump from '../../Atomos/AtomicBreadcrump/AtomicBreadcrump'
import AtomicNavBtn from '../../Atomos/AtomicNavBtn/AtomicNavBtn'
import './PageOptions.scss'
import OrganismQuoter from '../../Organismos/OrganismQuoter/OrganismQuoter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlans } from '../../../api/apiPlans'
import { setPlans } from '../../../redux/slices/plansSlice'
import { AppState} from '../../../types/types'
import { useNavigate } from 'react-router-dom'
import {calcularEdad} from '../../../../utils/utils'
import { addResumen } from '../../../redux/slices/clientSlice'
import AtomicStep from '../../Atomos/AtomicStep/AtomicStep'
import {
  OPTIONS_QUOTES,
  OPTIONS_QUOTES_PLANS,
  OPTIONS_NAV_RESUMEN
} from '../../../assets/constants/constants'

const PageOptions = () => {

  const [routes] = useState(OPTIONS_QUOTES)

  const [optionPlans, setOptionPlans] = useState(OPTIONS_QUOTES_PLANS)

  const [discount, setDiscount] = useState(false)
  const [age, setAge] = useState(0)


  const dispatch = useDispatch()
  const navigator = useNavigate()
  const plans = useSelector((state:AppState) => state.plans.list.list)
  const client = useSelector((state: any) => state.client.client)


  const plansFiltered = plans && plans.filter((plan) => plan.age > age)


  useEffect(() => {
    const getInfo = async () => {
      const plans = await fetchPlans()
      dispatch(setPlans(plans))
    }
    getInfo()
  }, [])

  useEffect(()=>{
    const age = async() => {
      const birth = client.birthDay
      const realage = await calcularEdad(birth)
      setAge(realage)
    }
    age()
  },[])




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

  const handleSelectPlan = (id:string,discount:boolean) => {
      const [selectPlan] = plans.filter(plan => plan.name === id)
      if (discount === true){
        const newplan = {...selectPlan}
        newplan.price*=0.95
        dispatch(addResumen(newplan))
        navigator(OPTIONS_NAV_RESUMEN)
      }else{
        dispatch(addResumen(selectPlan))
        navigator(OPTIONS_NAV_RESUMEN)
      }
  }


  return (
    <div className="pageoptions">
      <AtomicBreadcrump routes={routes} />
      <AtomicStep routes={routes}/>
      <AtomicNavBtn />
      <OrganismQuoter
        optionPlans={optionPlans}
        handleClickCard={handleClickCard}
        plans={plansFiltered}
        discount={discount}
        handleSelectPlan={handleSelectPlan}
      />
    </div>
  )
}

export default PageOptions