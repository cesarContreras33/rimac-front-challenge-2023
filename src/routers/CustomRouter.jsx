

import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { Router } from 'react-router-dom'
import {createBrowserHistory} from 'history'

const CustomRouter = ({children}) => {
  const history = createBrowserHistory()
  const [state, setState] = useState({
    action:history.action,
    location: history.location
  })

useLayoutEffect(() => {
  history.listen(setState)
}, [history])

  return (
    <Router children={children} location={state.location} navigationType={state.action} navigator={history}/>
  )
}

export default CustomRouter