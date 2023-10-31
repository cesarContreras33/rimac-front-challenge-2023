
import {useState} from 'react'

import AtomicBreadcrump from "../../Atomos/AtomicBreadcrump/AtomicBreadcrump"
import AtomicNavBtn from "../../Atomos/AtomicNavBtn/AtomicNavBtn"
import OrganismResumen from '../../Organismos/OrganismResumen/OrganismResumen'
import './PageResumen.scss'
import { useSelector } from 'react-redux'


const PageResumen = () => {
  const [routes] = useState([
    { label: 'Planes y Cobertura', num: '1', status: false },
    { label: 'Resumen', num: '2', status: true }
  ])

  const dataclient = useSelector((state: any) => state.client.client)

  return (
    <div className="pageresumen">
      <AtomicBreadcrump routes={routes} />
      <AtomicNavBtn />
      <OrganismResumen dataclient={dataclient}/>
    </div>
  )
}

export default PageResumen