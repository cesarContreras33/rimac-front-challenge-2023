import React, { useState } from 'react'
import './AtomicCheck.scss'
import { AtomicCheckProps } from '@types/types'
import AtomicCheckVisual from './AtomicCheckVisual.tsx'



const AtomicCheck: React.FC<AtomicCheckProps> = ({
  label,
  name,
  handleChecked
}) => {
  const [checked, setChecked] = useState(false)
  const toggleCheckbox = () => {
    const currentChecked = !checked
    setChecked(currentChecked)
    handleChecked(name, currentChecked)
  }

  return (
    <AtomicCheckVisual 
      checked={checked} 
      label={label} 
      toggleCheckbox={toggleCheckbox}
    />
  )
}

export default AtomicCheck

