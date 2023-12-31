
import React from 'react'
import './AtomicBreadcrump.scss'
import { AtomicBreadcrumpProps, AtomicBreadcrumpRoute } from '@types/types'


const AtomicBreadcrump:React.FC<AtomicBreadcrumpProps> = ({routes}) => {
  return (
    <div className="atomicbreadcrump">
      <div className="atomicbreadcrump__content">
        {routes && routes.map((route:AtomicBreadcrumpRoute, index) => (
          <div
            className={`atomicbreadcrump__content--planes ${
              route.status && 'active'
            }`}
            key={index}
          >
            {index > 0 && (
              <div
                className={`atomicbreadcrump__content--division ${
                  route.status && 'active'
                }`}
              > .... </div>
            )}
            <div className="numbernav">{route.num}</div>
            <p>{route.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


export default AtomicBreadcrump