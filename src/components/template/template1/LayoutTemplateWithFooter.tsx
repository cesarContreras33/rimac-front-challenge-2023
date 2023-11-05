import {ReactNode} from 'react'
import OrganismHeader from '@organism/OrganismHeader/OrganismHeader'
import OrganismFooter from '@organism/Footer/OrganismFooter'

import './LayoutTemplateWithFooter.scss'

const LayoutTemplateWithFooter = ({children}:{children:ReactNode}) => {
  return (
    <div className="layout-template-with">
      <OrganismHeader />

      <main className="main">{children}</main>
      
      <OrganismFooter />
    </div>
  )
}

export default LayoutTemplateWithFooter