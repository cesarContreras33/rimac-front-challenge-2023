//import React from 'react'

import React from 'react'
import {useNavigate} from 'react-router-dom'
import leftArrow from '@images/leftarrow.svg'
import './AtomicNavBtn.scss'

const AtomicNavBtn:React.FC = () => {
  
  const navigator = useNavigate()

  const onHandleClickBack = () =>{
    navigator(-1)

  }
  return (
    <div className='atomicnavbutton'>
      <div className="atomicnavbutton__content" onClick={onHandleClickBack}>
        <div className="btntype">
          <img src={leftArrow} alt="arrow" />
        </div>
        <p>Volver</p>
      </div>
    </div>
  )
}

export default AtomicNavBtn