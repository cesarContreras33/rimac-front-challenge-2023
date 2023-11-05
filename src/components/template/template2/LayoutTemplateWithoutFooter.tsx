import {ReactNode} from 'react'
import OrganismHeader from '@organism/OrganismHeader/OrganismHeader'
import './LayoutTemplateWithoutFooter.scss'

const LayoutTemplateWithoutFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div className="layout-template-without">
      <OrganismHeader />
      <main className="main">{children}</main>
    </div>
  )
}

export default LayoutTemplateWithoutFooter