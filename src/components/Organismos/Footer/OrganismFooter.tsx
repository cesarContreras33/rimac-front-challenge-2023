import logov2 from '../../../assets/images/logo_rimac_white.svg'
import './OrganismFooter.scss'

const OrganismFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img src={logov2} alt="logo_alt" />
        <p>© 2023 RIMAC Seguros y Reaseguros.</p>
      </div>
    </footer>
  )
}

export default OrganismFooter
