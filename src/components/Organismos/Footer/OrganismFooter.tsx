import logoWhitev1 from '../../../assets/images/logo_rimac_white.svg'
import logoWhitev2 from '../../../assets/images/logo_rimac_white_v2.svg'
import './OrganismFooter.scss'

import {FOOTER_COPYRIGHT} from '../../../assets/constants/constants'

const OrganismFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content--images">
          <img src={logoWhitev1} alt="logo_alt" className='logo-white-v1'/>
          <img src={logoWhitev2} alt="logo_alt" className='logo-white-v2'/>
        </div>
        <p>{FOOTER_COPYRIGHT}</p>
      </div>
    </footer>
  )
}

export default OrganismFooter
