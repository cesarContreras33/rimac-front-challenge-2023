import logoWhitev1 from '../../../assets/images/logo_rimac_white.svg'
import logoWhitev2 from '../../../assets/images/logo_rimac_white_v2.svg'
import './OrganismFooter.scss'

const OrganismFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content--images">
          <img src={logoWhitev1} alt="logo_alt" className='logo-white-v1'/>
          <img src={logoWhitev2} alt="logo_alt" className='logo-white-v2'/>
        </div>
        <p>© 2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  )
}

export default OrganismFooter
