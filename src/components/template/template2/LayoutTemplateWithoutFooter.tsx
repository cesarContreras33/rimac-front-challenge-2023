import {ReactNode} from 'react'
import OrganismHeader from '../../Organismos/OrganismHeader/OrganismHeader'
import './LayoutTemplateWithoutFooter.scss'

const LayoutTemplateWithoutFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout-template">
      <OrganismHeader />
      <main className="main">{children}</main>
    </div>
  )
}

export default LayoutTemplateWithoutFooter