//import React from 'react'
import AtomicContact from '../../Atomos/AtomicContact/AtomicContact'

import logo from '../../../assets/images/logo_rimac.svg'
import telephone from '../../../assets/images/GlTelephoneSolid.svg'
import './OrganismHeader.scss'

const OrganismHeader = () => {
  return (
    <header className="header">
      <div className="header__content">
        <img src={logo} alt="logo" />
        <AtomicContact
          msg={'¡Compra por este medio!'}
          imgurl={telephone}
          tlf={'(01) 411 6001'}
        />
      </div>
    </header>
  )
}

export default OrganismHeader