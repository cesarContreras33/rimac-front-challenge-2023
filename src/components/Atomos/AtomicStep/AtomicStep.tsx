import React from 'react'
import leftArrow from '@images/leftarrow.svg'
import './AtomicStep.scss'

interface AtomicStepProps {
  routes: AtomicBreadcrumpRoute[]
}

interface AtomicBreadcrumpRoute {
  label: string
  num: string
  status: boolean
}


const AtomicStep:React.FC<AtomicStepProps> = ({routes}) => {
  console.log(routes)
  return (
    <div className="atomicstep">
      <div className="atomicstep__content">
        <div className="btntype">
          <img src={leftArrow} />
        </div>
        <div className="atomicstep__content--steps">
          <p className="atomicstep__content--steps-parr">paso 1 de 2</p>
          <div className="atomicstep__content--steps-barr">
            <div className="atomicstep__content--steps-barr-step"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AtomicStep